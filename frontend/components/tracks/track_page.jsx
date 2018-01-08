import React from 'react';
import {Link, Route} from 'react-router-dom';
import EditFormContainer from '../upload_edit_track_form/edit_form_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentItem from "../comments/comment_item";

import { JustTheButtons } from './edit_delete';

class TrackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestTrack(this.props.match.params.track_name)
      .then((res) => this.props.fetchComments(res.track.id))
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.track_name !== this.props.match.params.track_name) {
      this.props.requestTrack(newProps.match.params.track_name)
        .then((res) => this.props.fetchComments(res.track.id))
    }
  }

  handleDeleteClick (e) {
    e.preventDefault();
    const id = this.props.tracks[0].id;
    this.props.deleteTrack(id).then(this.props.history.push('/stream'));
  }

  handleQueue(e) {
    e.preventDefault();

    if (e.currentTarget.textContent === "||") {
      e.currentTarget.textContent = "▶";
      e.currentTarget.removeAttribute("id","playing");
      document.getElementsByClassName('react-audio-player')[0].pause()
    } else {

      let currently_playing = document.getElementById("playing");
      if (currently_playing) {
        currently_playing.textContent = "▶";
        currently_playing.removeAttribute('id','playing');
      }

      e.currentTarget.textContent = "||";
      e.currentTarget.setAttribute("id","playing");
      this.props.receiveTrackToPlay(this.props.tracks[0]);

      document.getElementsByClassName('react-audio-player')[0].play();
    }
  }

  render () {

    const track = this.props.tracks.length === 1 ?
      this.props.tracks[0] : "";

     let modifyButtons = null;

     if (this.props.currentUser) {
       modifyButtons = this.props.currentUser.id === parseInt(track.artist_id) ?
         <JustTheButtons track={track}
                         handleClick={this.handleDeleteClick.bind(this)}/> : '';
     }

     let playButton = "▶";
     let playButtonId = "";
     let audioPlayer = document.getElementsByClassName("react-audio-player")[0];

     if (this.props.nowPlaying && typeof track === 'object') {
       if (track.id === this.props.nowPlaying.id) {
         playButtonId = 'playing';
         if (!audioPlayer.paused)  {playButton = "||";}
       }
     }

    return (
      <div className="track-show">
        <div className="song-stats">

          <div className="stats-waveform">
            <div className="song-and-play-button">
              <button onClick={this.handleQueue.bind(this)}
                      className="play-button-large"
                      id={playButtonId}>{playButton}</button>

              <div className="song-info">
                <span><Link to={`/${track.artist}`}>{track.artist}</Link></span>

                <span className="first-span">{track.title}</span>

              </div>
            </div>

            <img height="100px" width="500px"
src="https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/waveform.png"/>

            {modifyButtons}
          </div>
          <div className="song-stats-frame">
            <img className="song-stats-img"
              src={track.thumb_nail_url}></img>
          </div>
        </div>

        <div className="comments">

            <CommentFormContainer trackId={track.id}
                                  replyName="New Thread"
                                  parentId={null}/>



            <ul className="comments-ul">
              {
                this.props.comments.reverse().map((comment) => <CommentItem
                                                      key={comment.id}
                                                      comment={comment}
                                         currentUser={this.props.currentUser}
                                     deleteComment={this.props.deleteComment}/>)
              }

            </ul>

        </div>
      </div>
    );
  }
}

export default TrackPage;

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

  handleDeleteClick (e) {
    e.preventDefault();
    const id = this.props.tracks[0].id;
    this.props.deleteTrack(id).then(this.props.history.push('/stream'));
  }

  addToQueue(e) {
    e.preventDefault();
    this.props.receiveTrackToPlay(this.props.tracks[0]);
  }

  render () {
    console.log(this.props);
    const track = this.props.tracks.length === 1 ?
      this.props.tracks[0] : "";

     let modifyButtons = null;

     if (this.props.currentUser) {
       modifyButtons = this.props.currentUser.id === parseInt(track.artist_id) ?
         <JustTheButtons track={track}
                         handleClick={this.handleDeleteClick.bind(this)}/> : '';
     }



    return (
      <div className="track-show">
        <div className="song-stats">

          <div className="stats-waveform">
            <div className="song-and-play-button">
              <button onClick={this.addToQueue.bind(this)}
                      id="play-button-large">▶</button>

              <div className="song-info">
                <span>{track.artist}</span>

                <span>{track.title}</span>

                <span>{track.genre}</span>
              </div>
            </div>

            <img height="100px" width="500px"
src="https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/waveform.png"/>

          </div>

          <img className="song-stats-img" height="340px" width="340px"
            src={track.thumb_nail_url}></img>

        </div>

        <div className="comment-form">

          <CommentFormContainer trackId={track.id}/>

        </div>

          {modifyButtons}

        <ul>
          {
            this.props.comments.map((comment) => <CommentItem
                                                  key={comment.id}
                                                  comment={comment}/>)
          }

        </ul>
      </div>
    );
  }
}

export default TrackPage;

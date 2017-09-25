import React from 'react';
import {Link, Route} from 'react-router-dom';
import EditFormContainer from '../upload_edit_track_form/edit_form_container';
import { JustTheButtons } from './edit_delete';

class TrackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestTrack(this.props.match.params.track_name)
  }

  handleDeleteClick (e) {
    e.preventDefault();
    const id = this.props.tracks[0].id;
    this.props.deleteTrack(id).then(this.props.history.push('/stream'));
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

    return (
      <div className="track-show">
        <div className="song-stats">

          <div className="stats-waveform">
            <div className="song-and-play-button">
              <button id="play-button-large">▶</button>

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

          <form>
            <input type='text' placeholder="Comment Here"></input>
          </form>

        </div>

        <div>
          {modifyButtons}
        </div>
      </div>
    );
  }
}

export default TrackPage;

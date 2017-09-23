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
      <div>
        <img
          src={track.thumb_nail_url}></img>
        {track.title}
        {modifyButtons}
      </div>
    );
  }
}

export default TrackPage;

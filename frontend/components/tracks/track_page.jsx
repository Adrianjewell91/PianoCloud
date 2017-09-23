import React from 'react';
import {Link, Route} from 'react-router-dom';
import EditFormContainer from '../upload_edit_track_form/edit_form_container';
import { EditAndDeleteButtons } from "./edit_delete";


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

    const editButton = <Link to={`/${track.artist}/${track.title}/edit`}>
                       <button>Edit</button></Link>;

    const deleteButton = <button onClick={this.handleDeleteClick.bind(this)}>
                         Delete</button>;

    return (
      <div>
        {track.title}
        <div>
          {editButton}
          {deleteButton}
        </div>
      </div>
    );
  }
}

export default TrackPage;

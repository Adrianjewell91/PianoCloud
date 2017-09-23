import React from 'react';
import {Link, Route} from 'react-router-dom';
import EditFormContainer from '../upload_edit_track_form/edit_form_container';

class TrackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(); //may need to user regex to remove %, or search by id.
    //searching by ID would be easier.

    //Get the song name and find the id of the song.
    // searching by ID would solve the bug,
    // but it would make it harder to get from the params.
    // the other solution is to parse the track_name into something with spaces.
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
     console.log(track);
    return (
      <div>
        {track.title}
        {editButton}
        {deleteButton}
      </div>
    );
  }
}

export default TrackPage;

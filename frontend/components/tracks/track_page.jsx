import React from 'react';
import {Link, Route} from 'react-router-dom';
import EditFormContainer from '../upload_edit_track_form/edit_form_container';


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
  //can each have their own handleDeleteClick - lets have a try.

  render () {
    const track = this.props.tracks.length === 1 ?
      this.props.tracks[0] : "";

    const editButton = <Link to={`/${track.artist}/${track.title}/edit`}>
                       <button>Edit</button></Link>;

    const deleteButton = <button onClick={this.handleDeleteClick.bind(this)}>
                         Delete</button>;

     let modifyButtons = null;

     if (this.props.currentUser) {
       modifyButtons = this.props.currentUser.id === parseInt(track.artist_id) ?
         <div>{editButton}{deleteButton}</div> : '';
     }

    return (
      <div>
        {track.title}
        {modifyButtons}
      </div>
    );
  }
}

export default TrackPage;

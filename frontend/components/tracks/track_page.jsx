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

  // handleDeleteClick (e) {
  //   e.preventDefault();
  //   const id = this.props.tracks[0].id;
  //   this.props.deleteTrack(id).then(this.props.history.push('/stream'));
  // }

  render () {

    const track = this.props.tracks.length === 1 ?
      this.props.tracks[0] : "";

    let display;

    if (typeof track === "object") {
        display = (<div>
                  {track.title}
                  <EditAndDeleteButtons track={track}
                                        deleteTrack={this.props.deleteTrack}/>
                                    </div>)
      }
    //
    // const editButton = <Link to={`/${track.artist}/${track.title}/edit`}>
    //                    <button>Edit</button></Link>;
    //
    // const deleteButton = <button onClick={this.handleDeleteClick.bind(this)}>
    //                      Delete</button>;

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default TrackPage;

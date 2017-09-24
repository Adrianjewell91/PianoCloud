import React from 'react';
import TrackItem from "../tracks/track_item";
import {Link} from 'react-router-dom';
import ReactModal from 'react-modal';

import EditUserContainer from "./edit_user_container";

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  componentDidMount() {
    this.props.requestUser(this.props.match.params.user_name);
  }

  handleCloseModal() {
    this.setState({showModal: false});
    //Clear the errors remember!
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }

  render () {
    console.log(this.props);

    const artist = this.props.artist.length === 1 ?
      this.props.artist[0] : "";

    let track_display = "Loading";
    debugger
    if (artist !== "") {
      track_display = (
          artist.tracks.map((track) => <TrackItem key={track.title}
                                                  track={track}/>)
      )
    }

    return (
      <div className="user-page">
        <div className="profile-stats">
          <img src={artist.thumb_nail_url}/>

          <div className="user-info">
            <span>{artist.username}</span>
            <span>{artist.name}</span>
            <span>{artist.email}</span>
            <span>{artist.location}</span>
          </div>

          <div className='edit-profile'>
            <button
              onClick={this.handleOpenModal.bind(this)}>Edit Profile
            </button>

            <ReactModal
              className="edit-modal"
              isOpen={this.state.showModal}
              contentLabel="edit-form">
              <button onClick={this.handleCloseModal.bind(this)}>X</button>
              <EditUserContainer/>
            </ReactModal>
          </div>

        </div>

        <div className="stream">
          <h1>My Tracks</h1>
          <ul>
            {track_display}
          </ul>
        </div>
      </div>
    )
  }
}

export default UserPage;

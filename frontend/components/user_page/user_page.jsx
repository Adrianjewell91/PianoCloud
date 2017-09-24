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

  handleUpload(field) {
    return (e) => {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.currentTarget.files[0];

      let that = this;
      let fieldURL = `${field}URL`;
      let fieldFile = `${field}File`;

      reader.onloadend = function() {
        that.setState({[fieldURL]: reader.result, [fieldFile]: file});
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({[fieldURL]: "", [fieldFile]: null});
      }

    }
  }

  handleSubmit(e) {
      e.preventDefault();

      const formData = new FormData();

      formData.append("user[thumb_nail]", this.state.imageFile);

      this.props.updateUserImage(formData, this.props.artist[0].id)
      .then(() => this.props.history.push(`/`));
  }



  render () {
    const artist = this.props.artist.length === 1 ?
      this.props.artist[0] : "";

    let track_display = "Loading";
    let userProfileUrl = "";
    // debugger
    if (artist !== "") {
      track_display = (
          artist.tracks.map((track) => <TrackItem key={track.title}
                                                  track={track}/>)
      )

      userProfileUrl = artist.thumb_nail_url.includes("missing") ?
      "https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/hero.jpg" :
      artist.thumb_nail_url;

    }


    return (

      <div className="user-page">
        <div className="profile-stats">
          <div className="picture-and-info">


            <img className="profile-pic"
              src={userProfileUrl}/>

            <div className="user-info">
              <span>{artist.username}</span>
              <span>{artist.name}</span>
              <span>{artist.location}</span>
            </div>
          </div>
          <div className='edit-profile'>
            <button
              onClick={this.handleOpenModal.bind(this)}>Edit Profile
            </button>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="file"
                onChange={this.handleUpload("image")}>
              </input>
              <br/>
              <input type="submit" value="Change Thumbnail"/>
            </form>

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

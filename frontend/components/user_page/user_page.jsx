import React from 'react';
import TrackItem from "../tracks/track_item";
import {Link} from 'react-router-dom';
import ReactModal from 'react-modal';

import EditUserContainer from "./edit_user_container";
import {setUploadListener} from '../../util/set_upload_listener';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
  }

  componentWillMount() {
    this.props.requestUser(this.props.match.params.user_name)
      .then((res) => this.props.requestUserTracks(res.user.id));
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.user_name !== this.props.match.params.user_name) {
      newProps.requestUser(newProps.match.params.user_name)
              .then((res) => this.props.requestUserTracks(res.user.id));
    }
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
      document.getElementsByClassName("change-profile-pic-input")[0]
        .disabled = true;

      const formData = new FormData();

      formData.append("user[thumb_nail]", this.state.imageFile);

      this.props.updateUserImage(formData, this.props.artist[0].id)
        .then(() => this.props.history.push(`/`))
        .fail(() => document.getElementsByClassName("change-profile-pic-input")[0]
                            .disabled = false);
  }


  render () {

    const artist = this.props.artist.length === 1 ?
      this.props.artist[0] : "";

    let track_display = "";
    let userProfileUrl = "";
    let editButton ="";
    if (artist !== "") {
      track_display = (
          this.props.tracks.map((track) => <TrackItem key={track.title}
                              track={track}
                              currentUser={this.props.currentUser}
                              editTrack={this.props.updateTrack}
                              deleteTrack={this.props.deleteTrack}
                              receiveTrackToPlay={this.props.receiveTrackToPlay}
                              nowPlaying={this.props.nowPlaying}
                                                  />)
      )

      userProfileUrl = artist.thumb_nail_url.includes("missing") ?
      "https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/hero.jpg" :
      artist.thumb_nail_url;

      if (this.props.currentUser && (this.props.currentUser.id === artist.id)){
        editButton = (<button className="edit-delete-button"
                              onClick={this.handleOpenModal.bind(this)}>Edit
                      </button>);}

    }



    return (

      <div className="user-page">
        <div className="profile-stats">
          <div className="picture-and-info">

            <div className="picture-frame">
              <img className="profile-pic"
                src={userProfileUrl}/>
            </div>

            <div className="user-info">
              <span className="first-span">{artist.username}</span>
              <span>{artist.name}</span>
              <span>{artist.location}</span>
            </div>
          </div>
          <div className='edit-profile'>
            {editButton}

            <ReactModal
              className="edit-modal"
              isOpen={this.state.showModal}
              contentLabel="edit-form">
              <button className="close-edit-modal"
                onClick={this.handleCloseModal.bind(this)}>X</button>
              <div className="inside-edit-modal">
                <EditUserContainer/>

                <br/>
                <h1>Change Profile Image</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <label className="file-label">Choose a new Thumbnail
                    <input type="file" className="file-upload-btn"
                      onChange={this.handleUpload("image")}>
                    </input>
                  </label>
                  <br/>
                  <input className="submit change-profile-pic-input"
                         type="submit" value="Upload Image"/>
                </form>
                <script>{setUploadListener()}</script>
              </div>
              <ul>
                {
                  this.props.errors.map((error) => <li key={error}>
                                                      {error}!</li>)
                }
              </ul>
            </ReactModal>
          </div>

        </div>

        <div className="stream">
          <h1>Tracks</h1>
          <ul>
            {track_display}
          </ul>
        </div>
      </div>
    )
  }
}

export default UserPage;

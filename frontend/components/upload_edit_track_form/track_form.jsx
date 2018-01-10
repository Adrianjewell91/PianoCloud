import React from 'react';
import {Link} from 'react-router-dom';
import {setUploadListener} from '../../util/set_upload_listener';


class TrackForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.track || {
      title: "",
      description: "",
      genre: ""
    };
  }

  componentWillMount() {
    if (this.props.match.params.track_name) {
      this.props.requestTrack(this.props.match.params.track_name).then((res) => {
          this.setState(res.track);
      });
    }
  }

  componentDidMount() {
    setUploadListener();
  }

  componentWillUnmount() {
    if (this.props.errors.length > 0) {this.props.clearTrackErrors();}
    // dispatch({type: "CLEAR_TRACK_ERRORS"});
  }

    update(field) {
      return (e) => { //no periods allowed for some reason.
        let str = e.target.value
        let res = str.replace(".", "");
        this.setState({[field]: res});
      }
    }

    handleSubmit(e) {

      e.preventDefault();
      document.getElementsByClassName("track-form-submit")[0]
        .disabled = true;
      document.getElementsByClassName("track-form-submit")[0]
        .value = "Uploading";


      if (this.props.formType === "create") {

        if (this.state.recordingURL === "" ||
        this.state.recordingURL === undefined) {
          return this.props
          .receiveTrackErrors(
            {responseJSON: {errors: ["Must have a song!"]}});
          }

        if (this.state.imageURL === "" ||
            this.state.imageURL === undefined) {
          return this.props
                     .receiveTrackErrors(
                       {responseJSON: {errors: ["Must have an image!"]}});
        }


        const formData = new FormData();

        formData.append("track[title]", this.state.title);
        formData.append("track[description]", this.state.description);
        formData.append("track[genre]", this.state.genre);
        formData.append("track[track_thumb_nail]", this.state.imageFile);
        formData.append("track[track_recording]", this.state.recordingFile);


        this.props.processForm(formData)
        .then((res) => this.props.history.push(`/${res.track.artist}/${res.track.title}`));
      } else {
        this.props.processForm(this.state)
        .then((res) => this.props.history.push(`/${res.track.artist}/${res.track.title}`));
      }

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

    render() {

      let text = this.props.formType === "create" ?
      "Upload to PianoCloud" : "Edit"

      if (this.props.errors.length > 0) {
        document.getElementsByClassName("track-form-submit")[0]
          .disabled = false;
        text = "Try again!";
      }

      const backButton = <Link to="/stream">
                         <button className="back-to-page">Back To Stream</button></Link>

      const currentImage = this.props.track ?
                         <div className="edit-pic-frame">
                         <img className="edit-pic"
                           src={this.props.track.thumb_nail_url}/></div> : (
                             <div id='upload-buttons'>
                                 <label className="file-label">Choose a Thumbnail
                                   <input type="file" className="file-upload-btn"
                                     onChange={this.handleUpload("image")}/>
                                 </label>

                                 <br/>

                                 <label className="file-label">Choose an mp3 File
                                   <input className="file-upload-btn" type="file"
                                     onChange={this.handleUpload("recording")}/>
                                 </label>
                             </div>
                           );

      return (
        <div className="track-form-wrapper">
          <div className="track-form">
            <h1>{text}</h1>

            {currentImage}

            <form onSubmit={this.handleSubmit.bind(this)}>

              <br/>

              <label>
                <input id="title" type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title"></input>
              </label>

              <br/>

              <label>
                <select id="genre"
                  onChange={this.update('genre')}
                  defaultValue={this.state.genre} >
                  <option >Genre</option>
                  <option value="Classical">Classical</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Rock">Rock</option>
                  <option value="Avant Garde">Avant Garde</option>
                </select>
              </label>

              <br/>
              <br/>

              <label>
                <textarea id="description" rows="10" cols="47"
                  style={{resize: 'none'}}
                  value={this.state.description || ""}
                  onChange={this.update('description')}
                  placeholder="Description"></textarea>
              </label>
              <br/>

              <input className="submit track-form-submit"
                     type="submit"
                     value={text}/>

              {backButton}
          </form>

            <ul>
              {
                this.props.errors.map((error) => <li key={error}>
                                                    {error}!</li>)
              }
            </ul>

          </div>
        </div>
      );
    }

}

export default TrackForm;

import React from 'react';
import { Route, Link} from 'react-router-dom';


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

    update(field) {
      return (e) => {
        this.setState({[field]: e.target.value});
      }
    }

    handleSubmit(e) {
      e.preventDefault();

      //if there aren't pictures or images uploaded, set the errors.
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

      if (this.props.formType === "create") {
        this.props.processForm(formData)
        .then((res) => this.props.history.push(`/${res.track.artist}/${res.track.title}`));
      } else {
        this.props.processForm(formData, this.state.id)
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
    console.log(this.state);
      const text = this.props.formType === "create" ?
        "Upload A Song" : "Save(You need to reupload the media)"

      const backButton = <Link to="/stream">
                         <button>Back To Stream</button></Link>

      const currentImage = this.props.track ?
                         <img height="160px" width="160px"
                           src={this.props.track.thumb_nail_url}/> : "";

      return (
        <div>
          <h1>{text}</h1>

          {currentImage}


            <form className="track-form"
                  onSubmit={this.handleSubmit.bind(this)}>

                  <label>Thumbnail File (must be image)
                    <input type="file"
                      onChange={this.handleUpload("image")}/>
                  </label>
                  <br/>
                  <label>Song File (must be mp3)
                    <input type="file"
                      onChange={this.handleUpload("recording")}/>
                  </label>

                  <br/>

              <br/>

              <label>
                <input type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="Title"></input>
              </label>

              <br/>

            <label>
                <select
                        onChange={this.update('genre')}>
                  <option defaultValue="Genre" >Genre</option>
                  <option value="Classical">Classical</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Rock">Rock</option>
                  <option value="Avant Garde">Avant Garde</option>
                </select>
              </label>

              <br/>
              <br/>

              <label>
                <textarea rows="10" cols="47"
                  style={{resize: 'none'}}
                  value={this.state.description || ""}
                  onChange={this.update('description')}
                  placeholder="Description"></textarea>
              </label>
              <br/>

              <input className="track-form-submit" type="submit" value={text}></input>

          </form>

            <ul>
              {
                this.props.errors.map((error) => <li key={error}>
                                                    {error}!</li>)
              }
            </ul>

            {backButton}

        </div>
      );
    }

}

export default TrackForm;

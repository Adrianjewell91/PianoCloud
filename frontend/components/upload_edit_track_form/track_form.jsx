import React from 'react';

import { Route, Link} from 'react-router-dom';

class TrackForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.track || {
      title: "",
      description: "",
      genre: "",
      recordingFile: null,
      recordingURL: "",
      imageFile: null,
      imageURL: ""
    };
  }

  componentWillMount() {
    if (this.props.match.params.track_name) {
      this.props.requestTrack(this.props.match.params.track_name).then((res) => {
          console.log(res);
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

      const formData = new FormData();

      formData.append("track[title]", this.state.title);
      formData.append("track[description]", this.state.description);
      formData.append("track[genre]", this.state.genre);
      formData.append("track[track_recording]", this.state.recordingFile);
      formData.append("track[track_thumb_nail]", this.state.imageFile);

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

      const text = this.props.formType === "create" ? "Upload A Song" : "Save"

      const backButton = <Link to="/stream">
                         <button>Back To Stream</button></Link>

      return (
        <div className="update-form">
          <h1>{text}</h1>

            <form onSubmit={this.handleSubmit.bind(this)}>

            <label>Thumbnail File (must be image)
              <input type="file"
                     onChange={this.handleUpload("image")}/>
            </label>

            <label>Song File (must be mp3)
              <input type="file"
                     onChange={this.handleUpload("recording")}/>
            </label>

            <br/>

            <label>
              <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
                placeholder="Title"></input>
            </label>
            <br/>
            <label>
              <select value={this.state.genre}
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
                value={this.state.description}
                onChange={this.update('description')}
                placeholder="Description"></textarea>
            </label>
            <br/>

            <input className="auth-button" type="submit" value={text}></input>

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

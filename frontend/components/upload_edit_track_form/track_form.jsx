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
      recordingURL: ""
    };
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
      formData.append("track[track_recording]", this.state.recordingFile)

      this.props.processForm(formData)
        .then(() => this.props.history.push(`/`));
    }

    handleUpload(e) {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.currentTarget.files[0];

      let that = this;

      reader.onloadend = function() {
        that.setState({recordingURL: reader.result, recordingFile: file});
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({recordingFile: null, recordingURL: ""});
      }

    }

    render() {

      const text = this.props.formType === "create" ? "Upload A Song" : "Save"
      console.log(this.state);
      return (
        <div className="update-form">
          <h1>{text}</h1>

            <form onSubmit={this.handleSubmit.bind(this)}>

            <input type="file"
                   onChange={this.handleUpload.bind(this)}/>
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

        </div>
      );
    }

}

export default TrackForm;

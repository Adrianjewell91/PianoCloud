import React from "react";
import {Link} from "react-router-dom";

class EditUserForm extends React.component {
  constructor(props) {
    super(props);
    this.state = {name:"", location: "", email:""};//this.props.artist;
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updateUser(this.state)
    .then((res) => this.props.history.push(`/stream`));
  }

  render () {
    //Add image upload later.
    console.log(this.props);
    return (
      <div className="edit-form">
        <form>

            <input type="text"
                   placeholder="Name"
                   onChange={this.update('name')}
                   value={this.state.name}></input>

            <input type="text"
                   placeholder="Email"
                   onChange={this.update('email')}
                   value={this.state.email}></input>

            <input type="text"
                   placeholder="Location"
                   onChange={this.update('location')}
                   value={this.state.location}></input>

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

export default EditUserForm;

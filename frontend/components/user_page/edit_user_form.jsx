import React from 'react';
import {Link} from 'react-router-dom';

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.artist.name,
                  location: this.props.artist.location,
                  email: this.props.artist.email};//this.props.artist;
  }

  componentWillMount() {
    this.props.requestUser(this.props.match.params.user_name)
      .then((res) => { this.setState(
                                      { id: res.user.id,
                                        email: res.user.email,
                                       location: res.user.location,
                                       name: res.user.name})
                      });
  }



  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updateUser(this.state)
      .then((res) => this.props.history.push(`/`));
  }

  render () {
    //Add image upload later.
    return (
      <div className="edit-form">
        <h1>Edit Profile Info</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>

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

                 <input type="submit"/>
        </form>

      </div>
    );
  }
}

export default EditUserForm;

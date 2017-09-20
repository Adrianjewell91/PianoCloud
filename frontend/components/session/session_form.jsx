import React from 'react';

import { Route, Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

  }

    update(field) {
      return (e) => {
              // console.log(field);
              // console.log(e.target.value);
        this.setState({[field]: e.target.value});
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.processForm(this.state)
        .then(() => this.props.history.push(`/users/${this.state.username}`));
    }

    render() {

      const text = this.props.formType === "login" ? "Log In" : "Sign Up";

      // const oppositeLink = this.props.formType === "login" ? "signup" : "login";

      // console.log(this.props);

      return (
        <div>
          <h1>{text}</h1>

          <form onSubmit={this.handleSubmit.bind(this)}>

            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}></input>
            </label>

            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}></input>
            </label>

            <input type="submit" value={text}></input>

          </form>

            <ul>
              {
                this.props.errors.map((error)=> <li key={Math.random(1)}>
                                                    {error}</li>)
              }
            </ul>


        </div>
      );
    }

}

export default SessionForm;

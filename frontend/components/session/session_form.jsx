import React from 'react';

import { Route, Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    console.log(this.props.errors);
  }

    update(field) {
      return (e) => {
        this.setState({[field]: e.target.value});
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.processForm(this.state)
        .then(() => this.props.history.push(`/users/${this.state.username}`));
    }

    render() {

      const text = this.props.formType === "login" ? "Log In" : "Create Account";
      console.log(this.props.errors);

      return (
        <div className="auth-form">
          <h1>{text}</h1>

          <form onSubmit={this.handleSubmit.bind(this)}>

            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"></input>
            </label>
            <br/>
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"></input>
            </label>
            <br/>

            <input className="auth-button" type="submit" value={text}></input>

          </form>

            <ul>
              {
                this.props.errors.map((error) => <li key={Math.random(1)}>
                                                    {error}!</li>)
              }
            </ul>


        </div>
      );
    }

}

export default SessionForm;

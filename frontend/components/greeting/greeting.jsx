import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    let display;
    if (this.props.currentUser) {
      display = (
        <div>
          <h1>You are logged in, {this.props.currentUser}!</h1>
          <button onClick={this.props.logout.bind(this)}>Log Out</button>
        </div>
      )
    } else {
      display = (
        <div>
          <h1>Discover Music On PianoCloud</h1>
          <Link to="/login">Log In</Link><br/>
          <Link to="/signup">Sign Up</Link>
        </div>
      )
    }

    return (
      <div>
        {display}
      </div>
    );
  }

}

export default Greeting;

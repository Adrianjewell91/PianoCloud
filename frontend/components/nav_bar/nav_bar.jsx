import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    let display;

    if (this.props.currentUser) {
      display = (
        <div>
          <span>{`${this.props.currentUser.username} `}</span>
          <button onClick={this.props.logout.bind(this)}>Log Out</button>
        </div>
      )
    } else {
      display = (
        <div>
          <button><Link to="/login">Log In</Link></button>
          <button><Link to="/signup">Sign Up</Link></button>
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

export default NavBar;

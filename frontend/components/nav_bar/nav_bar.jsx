import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    let display;
    let home_button = (<button><Link to="/">Home</Link></button>);



    if (this.props.currentUser) {

      let username = this.props.currentUser.username;

      display = (
        <div>
          {home_button}
          <Link to={`/users/${username}`}>{` ${username} `}</Link>
          <button onClick={this.props.logout.bind(this)}>Log Out</button>
        </div>
      )
    } else {
      display = (
        <div>
          {home_button}
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

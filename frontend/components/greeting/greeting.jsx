import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  //Set up ternary logic to redirect to user profile if logged in.

  render () {

    let search_input = (<input type="text"
                               placeholder="(For Display Only)"></input>)

    let display;
    console.log(this.props);
    if (this.props.currentUser) {
      display = (
        <Redirect to={`/users/${this.props.currentUser.username}`}></Redirect>
      )
    } else {
      display = (        <div>
                         <h1>Discover Music with PianoCloud</h1>
                         <p>{search_input}</p>
                         </div>);
    }

    return (
      <div>
        {display}
      </div>
    );
  }

}

export default Greeting;

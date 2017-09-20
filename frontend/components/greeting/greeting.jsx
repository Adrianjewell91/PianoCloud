import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  //Set up ternary logic to redirect to user profile if logged in.

  render () {

    let search_input = (<input type="text"
                               placeholder="Search Artists or Music"></input>)

    return (
      <div>
        <h1>Discover Music with PianoCloud</h1>
        <p>{search_input}</p>
      </div>
    );
  }

}

export default Greeting;

import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  //Set up ternary logic to redirect to user profile if logged in.
  componentDidMount () {
    if (this.props.currentUser) {
      this.props.history.push(`/users/${this.props.currentUser.username}`);}
  }


  render () {

    let search_input = (<input type="text"
                               placeholder="(For Display Only)"></input>)


    let display = (        <div>
                       <h1>Discover Music with PianoCloud</h1>
                       <p>{search_input}</p>
                       </div>);

    return (
      <div>
        {display}
      </div>
    );
  }

}

export default Greeting;

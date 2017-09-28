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
    else {
      document.getElementsByClassName("main-page")[0]
        .classList.add("greeting-background");
    }
  }

  componentWillUnmount() {
    document.getElementsByClassName("main-page")[0]
      .classList.remove("greeting-background");
  }

  render () {

    let search_input = (<input type="text"
                               placeholder="Search Music and Artists"></input>)

    return (
      <div className="splash">

       <h1>Connect with PianoCloud</h1>
       {search_input}
     </div>
    );
  }

}

export default Greeting;

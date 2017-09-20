import React from 'react';

class UserPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  //Want to display the user searched for, not the current user.
  //But the button in nav bar will find the current user.

  render () {
    console.log(this.props);
    return (
      <div>
        <h1>Soon to include User Profile Information</h1>
        <p>On mount, query the database for the user in props.match.params
        .username and display it here. THere will be quite a lot to display.</p>
      </div>
    )
  }
}

export default UserPage;

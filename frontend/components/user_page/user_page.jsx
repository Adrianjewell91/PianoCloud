import React from 'react';

class UserPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>{this.props.currentUser.username}</h1>

      </div>
    )
  }
}

export default UserPage;

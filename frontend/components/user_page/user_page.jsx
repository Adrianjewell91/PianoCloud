import React from 'react';

class UserPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props);
    this.props.requestUser(this.props.match.params.user_name);
  }


  render () {
    // console.log(this.props);
    return (
      <div className="user-page">

    </div>
    )
  }
}

export default UserPage;

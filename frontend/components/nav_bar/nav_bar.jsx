import React from 'react';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom';

import SessionFormContainer from '../session/session_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({showModal: true});
  }

  handleCloseModal() {
    this.setState({showModal: false});
  }

  render () {
    let display;
    let home_button = (<button><Link to="/">Home</Link></button>);

    if (this.props.currentUser) {

      let username = this.props.currentUser.username;

      display = (
        <div>
          {home_button}
          <button>
              <Link to={`/users/${username}`}>{`${username}`}</Link>
          </button>

          <button onClick={this.props.logout.bind(this)}>Log Out</button>
        </div>
      );
    } else {

      display = (
        <div>
          {home_button}
          <button onClick={this.handleOpenModal}>Log In</button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="signup-or-login"
          >
            <button onClick={this.handleCloseModal}>Close</button>
            <SessionFormContainer/>
          </ReactModal>

          <button onClick={this.handleOpenModal}>Sign Up</button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="signup-or-login"
          >
            <button onClick={this.handleCloseModal}>Close</button>
            <SessionFormContainer/>
          </ReactModal>

        </div>
      );
    }

    return (
      <div>
        {display}
      </div>
    );

  }
}

export default NavBar;

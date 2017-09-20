import React from 'react';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom';

import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoginModal: false,
      showSignInModal: false
    };

    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
    this.handleOpenSigninModal = this.handleOpenSigninModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenLoginModal() {
    this.setState({showLoginModal: true});
  }

  handleOpenSigninModal() {
    this.setState({showSigninModal: true});
  }

  handleCloseModal() {
    this.setState({showLoginModal: false, showSigninModal: false});
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout();
    this.handleCloseModal();
  }


  render () {
    let display;
    let home_button = (<button><Link to="/">Home</Link></button>);
    let search_input = (<input type="text"
                               placeholder="Search Artists or Music"></input>)


    if (this.props.currentUser) {

      let username = this.props.currentUser.username;

      display = (
        <div>
          {home_button}
          {search_input}
          <button>
              <Link to={`/users/${username}`}>{`${username}`}</Link>
          </button>

          <button onClick={this.handleLogOut.bind(this)}>Log Out</button>
        </div>
      );
    } else {

      display = (
        <div>

          <button onClick={this.handleOpenLoginModal}>Sign In</button>
          <ReactModal
            isOpen={this.state.showLoginModal}
            contentLabel="signup-or-login"
          >
            <button onClick={this.handleCloseModal}>Close</button>
            <LoginFormContainer/>
          </ReactModal>

          <button onClick={this.handleOpenSigninModal}>Create Account</button>
          <ReactModal
            isOpen={this.state.showSigninModal}
            contentLabel="signup-or-login"
          >
            <button onClick={this.handleCloseModal}>Close</button>
            <SignupFormContainer/>
          </ReactModal>

        </div>
      );
    }

    return (
      <div className="header">
        {display}
      </div>
    );

  }
}

export default NavBar;

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

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
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

  handleDemoLogin (e) {
    e.preventDefault();
    this.props.login({username: 'adriantest', password:'123456'})
      .then(() => this.props.history.push(`/users/adriantest`));
  }

  handleLogOut(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.logout().then(() => this.props.history.push(`/`));
    this.handleCloseModal();
  }


  render () {
    //Buttons
    let display;
    let logo_image =
    (<img height="46px" width="55px" className="nav-logo"
    src="https://cdn.pixabay.com/photo/2017/06/08/10/25/art-2383231_1280.jpg"
    />)


    let home_button = (<Link to="/">Home</Link>);
    let upload_button = "Upload";
    let search_input = (
      <form className="nav-search-form">
        <input className="nav-search" type="text"
                               placeholder="(For Display Only)"></input>
        <i className="fa fa-search" aria-hidden="true"></i>
      </form>)


    //Class Name
    let navLoggedIn = "nav-loggedin";
    let navLoggedOut = "nav-loggedout";
    let navButtonClass = 'nav-button';

    //Establish which one to render.
    if (this.props.currentUser) {

      let username = this.props.currentUser.username;

      display = (
        <div className={navLoggedIn}>

          <Link to="/">{logo_image}</Link>
          <button className={navButtonClass}>{home_button}</button>
          {search_input}
          <button className={navButtonClass}>{upload_button}</button>
          <button className={navButtonClass}>
              <Link to={`/users/${username}`}>{`${username}`}</Link>
          </button>

          <button className={navButtonClass}
            onClick={this.handleLogOut.bind(this)}>Sign Out</button>
        </div>
      );
    } else {

      display = (
        <div className={navLoggedOut}>

          <Link to="/">{logo_image}</Link>

          <div>
            <button className={navButtonClass}
                    onClick={this.handleDemoLogin}>Demo Sign In</button>

            <button className={navButtonClass}
              onClick={this.handleOpenLoginModal}>Sign In</button>

              <ReactModal
                isOpen={this.state.showLoginModal}
                contentLabel="signup-or-login"
              >
                <button onClick={this.handleCloseModal}>Close</button>
                <LoginFormContainer/>
              </ReactModal>

            <button className={navButtonClass}
              onClick={this.handleOpenSigninModal}>Create Account</button>

              <ReactModal
                isOpen={this.state.showSigninModal}
                contentLabel="signup-or-login"
              >
                <button onClick={this.handleCloseModal}>Close</button>
                <SignupFormContainer/>
              </ReactModal>

          </div>

        </div>
      );
    }

    //Actually Render It.
    return (
      <div className="header">
        {display}
      </div>
    );

  }
}

export default NavBar;

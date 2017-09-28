import React from 'react';
import ReactModal from 'react-modal';
import {Link} from 'react-router-dom';

import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

ReactModal.defaultStyles.overlay.backgroundColor = "rgba(128,128,128,0.75)";
ReactModal.defaultStyles.overlay.zIndex="2";

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoginModal: false,
      showSignInModal: false,
      query: ""
    };

    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
    this.handleOpenSigninModal = this.handleOpenSigninModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSearch(e) {
    debugger
    this.props.requestSearchResults(this.state.query)
      .then(() => this.props.history.push(`/search`));
  }

  handleOpenLoginModal() {
    this.setState({showLoginModal: true});
  }

  handleOpenSigninModal() {
    this.setState({showSigninModal: true});
  }

  handleCloseModal() {
    this.setState({showLoginModal: false, showSigninModal: false});
    this.props.clearSessionErrors();
  }

  //A special thing !
  handleDemoLogin (e) {
    e.preventDefault();

    this.props.login({username: 'adriantest', password:'123456'})
      .then(() => this.props.history.push(`/users/adriantest`));
  }

  handleLogOut(e) {
    e.preventDefault();

    this.props.logout()
      .then(() => this.props.history.push(`/`));

    this.handleCloseModal();
  }


  render () {
    //Buttons
    let display;
    let logoImage =
    (<img height="46px" width="55px" className="nav-logo"
    src="https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/hero.jpg"
    />)


    let homeButton = (<Link to="/">Home</Link>);
    let streamButton = (<Link to="/stream">Stream</Link>);
    let uploadButton = (<Link to="/upload">Upload</Link>);
    let search_input = (
      <form onSubmit={this.handleSearch.bind(this)}
            className="nav-search-form">
        <input className="nav-search"
               onChange={this.update("query")}
               value={this.state.query}
               type="text"
               placeholder="Search Music"></input>
      </form>)


    //Class Name
    let navLoggedIn = "nav-loggedin";
    let navLoggedOut = "nav-loggedout";
    let navButtonClass = 'nav-button';

    //Establish which one to render.
    if (this.props.currentUser) {

      let user = this.props.currentUser;

      //This is a hack.
      const userProfileUrl = user.thumb_nail_url.includes("missing") ?
        "https://s3-us-west-2.amazonaws.com/pianocloud-adrianjewell/hero.jpg" :
        user.thumb_nail_url;

      display = (
        <div className={navLoggedIn}>

              <Link to={`/users/${user.username}`}>{logoImage}</Link>

              <Link to={`/users/${user.username}`}>
                  <button className={navButtonClass}>Home</button>
              </Link>

              <Link to="/stream">
                <button className={`${navButtonClass} stream-button`}>
                  Stream</button>
              </Link>

              {search_input}
              <Link to="/upload">
                <button className={navButtonClass}>Upload</button>
              </Link>

              <Link to={`/users/${user.username}`}>
                <div className="nav-bar-pic-and-link">
                  <div className = 'profile-nav-thumbnail-frame'>
                      <img className = 'profile-nav-thumbnail'
                           src={userProfileUrl}/>
                  </div>



                <button className={navButtonClass}>
                    {`${user.username}`}
                </button>

                </div>
              </Link>

              <button className={navButtonClass}
                onClick={this.handleLogOut.bind(this)}>Sign Out</button>
        </div>
      );
    } else { //If Logged out

      display = (
        <div className={navLoggedOut}>
          <div>
            <Link to="/">{logoImage}</Link>
            <Link to="/stream">
                <button className={`${navButtonClass} nav-stream`}>
                Stream</button>
            </Link>
          </div>

          <div className="the-log-out-buttons">
            <button className={navButtonClass}
                    onClick={this.handleDemoLogin}>Demo Sign In</button>

            <button className={navButtonClass}
              onClick={this.handleOpenLoginModal}>Sign In</button>

              <ReactModal
                className="auth-modal"
                isOpen={this.state.showLoginModal}
                contentLabel="auth-modal">

                <button onClick={this.handleCloseModal}>X</button>
                <LoginFormContainer/>
              </ReactModal>

            <button className={navButtonClass}
              onClick={this.handleOpenSigninModal}>Create Account</button>

              <ReactModal
                className="auth-modal"
                isOpen={this.state.showSigninModal}
                contentLabel="auth-modal">

                <button onClick={this.handleCloseModal}>X</button>
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

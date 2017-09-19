import React from 'react';
import {connect} from 'react-redux';
import {login, signup, logout} from "../../actions/session_actions";

import NavBar from './nav_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (formUser) => dispatch(login(formUser)),
  signup: (formUser) => dispatch(signup(formUser)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

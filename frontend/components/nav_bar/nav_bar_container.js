import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {login, signup, logout,
        clearSessionErrors } from "../../actions/session_actions";

import {requestSearchResults} from "../../actions/search_actions";

import NavBar from './nav_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  login: (formUser) => dispatch(login(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  requestSearchResults: (query) => dispatch(requestSearchResults(query)),
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Boolean(state.session.currentUser);
  const errors = state.errors.session;
  const formType = ownProps.location.pathname === "/login" ? "login" : "signup";

  return {loggedIn, errors, formType};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = ownProps.location.pathname === "/login" ? login : signup;

  return {
    processForm: (formUser) => dispatch(processForm(formUser))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));

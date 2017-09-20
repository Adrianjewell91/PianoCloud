import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.session;
  const formType = "signup";
  return {errors, formType};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = signup;

  return {
    processForm: (formUser) => dispatch(processForm(formUser))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {toArray} from "../../util/selectors";
import { updateUser, requestUser,
         receiveUserErrors } from '../../actions/users_actions';

import EditUserForm from './edit_user_form';

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.users;
  const artist = toArray(state.entities.users)[0];
  return {artist, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateUser: (formUser) => dispatch(updateUser(formUser)),
    requestUser: (user) => dispatch(requestUser(user)),
    receiveUserErrors: (errors) => dispatch(receiveUserErrors(errors))
  };
};

export default withRouter(connect(mapStateToProps,
                                  mapDispatchToProps)(EditUserForm));

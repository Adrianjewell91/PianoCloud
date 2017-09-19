import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';

import Greeting from './greeting';

const currentUserArray = ({currentUser}) => {
  if (currentUser) {
    return currentUser.username;
  } else {
    return undefined;
  }
}

const mapStateToProps = state => ({
  currentUser: currentUserArray(state.session)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

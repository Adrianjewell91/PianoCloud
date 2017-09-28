import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import {requestSearchResults} from "../../actions/search_actions";

import Greeting from './greeting';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestSearchResults: (query) => dispatch(requestSearchResults(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

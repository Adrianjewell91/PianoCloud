import {
  RECEIVE_USERS,
  RECEIVE_USER,
} from '../actions/users_actions';

import {REMOVE_TRACK} from "../actions/tracks_actions";

import {RECEIVE_TRACK, RECEIVE_TRACKS} from '../actions/tracks_actions';
//Here i want to clear users when RECEIVE_TRACK so that tracks aren't listed twice.

import {RECEIVE_SEARCH_RESULTS} from "../actions/search_actions";


const UsersReducer = (state = {}, action) => {
  Object.freeze(state);


  switch (action.type) {
    case RECEIVE_USERS:

      let allUsers = {};
      action.users.forEach((user) => allUsers[user.id] = user);
      return allUsers;
    case RECEIVE_USER:
      return {[action.user.id]: action.user};
    case RECEIVE_TRACK:
      return {};
    case RECEIVE_SEARCH_RESULTS:

      let searchedUsers = {};
      action.results.users.forEach((user) => searchedUsers[user.id] = user);
      return searchedUsers;
    default:
      return state;
  }
};

export default UsersReducer;

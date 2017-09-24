import {
  RECEIVE_USERS,
  RECEIVE_USER,
} from '../actions/users_actions';

import merge from "lodash";

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:

      let allUsers = {};
      action.users.forEach((user) => allTracks[user.id] = user);
      return allUsers;
    case RECEIVE_USER:

      return {[action.user.id]: action.user};

    default:
      return state;
  }
};

export default UsersReducer;

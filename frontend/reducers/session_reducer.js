import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/users_actions';

const _nullSession = {
  currentUser: null
};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return Object.assign({}, state, { currentUser });

    case RECEIVE_USER:
      if (state.currentUser === null) {return state}

      if (action.user.id === state.currentUser.id) {
        return {currentUser: action.user}
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default SessionReducer;

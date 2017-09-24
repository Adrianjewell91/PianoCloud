import {
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_USER_ERRORS,
  REMOVE_USER,
  CLEAR_USER_ERRORS
} from '../actions/users_actions';

const UserErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      const errors = action.errors.responseJSON.errors;
      return errors;

    case RECEIVE_USERS:
      return [];
    case RECEIVE_USER:
      return [];
    case CLEAR_USER_ERRORS:
      return [];
    default:
      return state;
  }
};

export default UserErrorsReducer;

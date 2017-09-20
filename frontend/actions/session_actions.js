import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_CURRENT_USERS = 'RECEIVE_CURRENT_USERS';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

//Regular Actions

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});


//Thunks

export const fetchUsers = formUser => dispatch => {
  return SessionUtil.fetchUsers(formUser)
    .then(user => dispatch(receiveAllUsers(user)))
    .fail(err => dispatch(receiveErrors(err)));
};

export const login = formUser => dispatch => {
  return SessionUtil.createSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveErrors(err)));
};

export const logout = () => dispatch => {
  return SessionUtil.destroySession().then(() => dispatch(receiveCurrentUser(null)));
};

export const signup = formUser => dispatch => {
  return SessionUtil.createUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveErrors(err)));
};

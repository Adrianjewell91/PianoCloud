import * as UserProfileUtil from "../util/user_api_util.js";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS
});

export const requestUsers = () => (dispatch) => {
  return UserProfileUtil.getUsers()
    .then((users) => dispatch(receiveUsers(users)))
    .fail((errors) => dispatch(receiveUserErrors(errors)));
};

export const requestUser = (username) => (dispatch) => {
  return UserProfileUtil.getUser(username)
    .then((user) => dispatch(receiveUser(user)))
    .fail((errors) => dispatch(receiveUserErrors(errors)));
};

export const updateUser = (user) => (dispatch) => {
  return UserProfileUtil.updateUser(user)
    .then((user) => dispatch(receiveUser(user)))
    .fail((errors) => dispatch(receiveUserErrors(errors)));
}

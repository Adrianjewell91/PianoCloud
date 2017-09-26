import {RECEIVE_COMMENT, REMOVE_COMMENT,
        RECEIVE_COMMENTS} from "../actions/comment_actions";

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
          let allComments = {};
          action.comments.forEach((comment) => allComments[comment.id] = comment);
          return allComments;
    case RECEIVE_COMMENT:
          return Object.assign({}, state, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
          let newState = Object.assign({}, state);
          delete newState[`${action.id}`];
          return newState;
    default:
          return {};
  }
}

export default CommentsReducer;

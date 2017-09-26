import {RECEIVE_COMMENT, RECEIVE_COMMENTS} from "../actions/comment_actions";

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
          let allComments = {};
          action.comments.forEach((comment) => allComments[comment.id] = comment);
          return allComments;
    case RECEIVE_COMMENT:
          return {[action.comment.id]: action.comment};
    default:
          return state;
  }
}

export default CommentsReducer;

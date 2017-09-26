import * as CommentUtil from "../util/comment_api_util.js";

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS, comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT, comment
})

export const fetchComments = (track_id) => (dispatch) => {
  return CommentUtil.getComments(track_id)
    .then((comments) => dispatch(receiveComments(comments)));
}

export const createComment = (comment,track_id) => (dispatch) => {
  return CommentUtil.getComments(track_id)
    .then((comment) => dispatch(receiveComment(comment)));
}

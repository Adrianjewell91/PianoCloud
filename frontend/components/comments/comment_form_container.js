import React from 'react';
import { connect } from 'react-redux';

import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createComment: (formComment, track_id) => dispatch(createComment(
                                                       formComment, track_id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);

import React from 'react';
import {Link} from 'react-router-dom';

import CommentFormContainer from './comment_form_container';

export const CommentItem = ({comment, currentUser, deleteComment}) => {

  let deleteButton = ""
  if (currentUser) {
    deleteButton = currentUser.username === comment.author ?
      (<button onClick={()=>deleteComment(comment.id)}>Delete</button>) : "";
  }

  let singleComment = <li className="comment-li">
            <div className="comment-img-frame">
                <img className="comment-img-pic"
                     src={comment.author_image_url}/>
            </div>

            <div className="commentor-stats">
              <div className="commentor-stats-line-1">
                <span><Link to={`/${comment.author}`}>
                               {comment.author}</Link></span>
                <span>{comment.created_at.substring(0,10)}</span>
              </div>

              <div className="comment-body-and-delete">
                <span>{comment.body}</span>
                <span>{deleteButton}</span>
              </div>
            </div>
            <br/>
          </li>

  if (comment.Children.length === 0) {
    return (
      <div>
        {singleComment}
        <CommentFormContainer parentId={comment.id} replyName="Reply"
                              trackId={comment.track_id}/>
      </div>
    );
  } else {

    return (
      <div>
          {singleComment}
          <CommentFormContainer parentId={comment.id} replyName="Reply"
                                trackId={comment.track_id}/>
          <ul>
            {
              comment.Children.map((child) => {
                return <li key={`commentId${child.id}`}><CommentItem
                                                          currentUser={currentUser}
                                                          deleteComment={deleteComment}
                                                          comment={child}/></li>
              })
            }
          </ul>
      </div>
    );
  }

}

export default CommentItem;

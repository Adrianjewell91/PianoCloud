import React from 'react';
import {Link} from 'react-router-dom';

export const CommentItem = ({comment, currentUser, deleteComment}) => {

  const deleteButton = currentUser.username === comment.author ?
    (<button onClick={()=>deleteComment(comment.id)}>Delete</button>) : "";

  return (<li className="comment-li">
            <div className="comment-img-frame">
                <img className="comment-img-pic"
                     src={comment.author_image_url}/>
            </div>

            <div className="commentor-stats">
              <div>
                <Link to={`/users/${comment.author}`}>
                               {comment.author}</Link>
              </div>

              <div className="comment-body-and-delete">
                <span>{comment.body}</span>
                <span>{deleteButton}</span>
              </div>
            </div>
          </li>);
}

export default CommentItem;

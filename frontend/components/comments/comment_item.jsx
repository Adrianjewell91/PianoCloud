import React from 'react';
import {Link} from 'react-router-dom';

export const CommentItem = ({comment, currentUser}) => {

  return (<li className="comment-li">
            <div className="comment-img-frame">
                <img className="comment-img-pic"
                     src={currentUser.thumb_nail_url}/>
            </div>

            <div className="commentor-stats">
              <Link to={`/users/${currentUser.username}`}>
                             {currentUser.username}</Link>
              <span>{comment.body}</span>
            </div>
          </li>);
}

export default CommentItem;

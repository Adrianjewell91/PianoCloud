import React from 'react';
import {Link} from 'react-router-dom';

export const CommentItem = ({comment}) => {

  return (<li>
    
          {comment.body}

  </li>);
}

export default CommentItem;

import React from 'react';
import CommentCard from './CommentCard';

function Comments({comments}) {
    return (
        <>
        <h2>{comments.length} Comments</h2>
        {comments.map((comment)=><CommentCard info={comment} key={comment.id}/>)}
        </>
    );
}

export default Comments;

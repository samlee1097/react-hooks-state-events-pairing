import React from 'react';

function CommentCard({info}) {
    return (
        <>
            <h3>{info.user}</h3>
            <p>{info.comment}</p>
        </>    
    );
}

export default CommentCard;

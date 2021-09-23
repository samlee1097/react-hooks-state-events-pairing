import React from 'react';

function VideoDetail({title, views, createdAt, likesIncrement , dislikesIncrement, likes, dislikes}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <span>
                <button onClick={likesIncrement}>{likes} 👍</button>
                <button onClick={dislikesIncrement}>{dislikes} 👎</button>
            </span>
        </>
    )
}

export default VideoDetail;

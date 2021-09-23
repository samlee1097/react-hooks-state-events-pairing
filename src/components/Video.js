import React, {useState} from 'react';
import VideoDetail from './VideoDetail';

function Video({videoData}) {

    const [likes, setLikes] = useState(videoData.upvotes);
    const [dislikes, setDislikes] = useState(videoData.downvotes);

    function incrementLikes(){
        return setLikes(() => likes + 1);
    }
    function incrementDislikes(){
        return setDislikes(() => dislikes + 1);
    }

    return (
        <>
        <iframe
            width="919"
            height="525"
            src={videoData.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={videoData.title}
        />
        <VideoDetail title={videoData.title} views={videoData.views} createdAt={videoData.createdAt} likes={likes} dislikes={dislikes} likesIncrement={incrementLikes} dislikesIncrement={incrementDislikes}/>
        </>
    );
}

export default Video;

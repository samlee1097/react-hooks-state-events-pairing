import React, {useState} from 'react'
import video from "../data/video.js";
import Video from "./Video.js";
import Comments from "./Comments.js";

function App() {
  const [isVisible, SetIsVisible] = useState("Show Comments");
  
  function visible() {
    if (isVisible === "Show Comments"){
      SetIsVisible("Hide Comments");
    } else {
      SetIsVisible("Show Comments");
    }
  }

  return (
    <div className="App">
        <Video videoData={video}/>
        <div>
          <button onClick={() => SetIsVisible(visible)}>{isVisible}</button>
          {isVisible === "Hide Comments"? <Comments comments={video.comments} /> : null}
        </div>
    </div>
  );
}

export default App;


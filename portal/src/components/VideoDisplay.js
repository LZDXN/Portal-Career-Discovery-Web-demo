import React from "react";
import "../App.css";

const VideoDisplay = () => {
  return (
    <div className="video-container">
      <video width="60%" controls muted autoplay>
        <source src="/demo/WashU_ads.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoDisplay;

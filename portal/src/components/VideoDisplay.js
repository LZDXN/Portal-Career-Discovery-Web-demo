import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

const VideoDisplay = () => {
  return (
    // <div className="ratio ratio-16x9">
    <MDBContainer>
      <video width="100%" controls muted autoplay>
        <source src="/demo/portal_pre_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </MDBContainer>
    // </div>
  );
};

export default VideoDisplay;

import React from "react";
import vid from "../video/gears_gold.mp4";
import "./Video.css";

const Video = () => {
  return (
    <video className="show_vid" loop autoPlay muted>
      <source src={vid} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  );
};

export default Video;

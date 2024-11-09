import React from "react";

const VideoEmbed: React.FC = () => {
  return (
    <iframe
      width="560"
      height="280"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="YouTube video"
    //   frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default VideoEmbed;

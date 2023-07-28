import React from 'react';


const CaseReact20 = () => {

  const redVideo = './assets/videos/red-rotate.mp4'

  return (
    <div className="module">
      <video 
        className="red-video"
        autoPlay="autoplay"
        loop="loop"
        muted
        src={redVideo}
      >
      </video>
      <div className="overlay">
        <h1 className="text">Welcome to the Future</h1>
      </div>
     
    </div>
  )
}

export default CaseReact20;

import React from 'react';

let NUM_VIDEOS = 3;

export default class ClipVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  getVideo = () => {
    let videoNum = Math.floor(Math.random() * NUM_VIDEOS);
    return `/static/videos/game-${videoNum}.webm`;
  }

  changeVideo = (event) => {
    let videoPlayer = event.target;

    // Find and assign a new video.
    while (true) {
      let newVideo = this.getVideo();

      if (videoPlayer.src !== newVideo) {
        videoPlayer.src = newVideo;
        break;
      }
    }

    // Play the new video.
    videoPlayer.play();
  }

  render = () => {
    return (
      <div style={{filter: 'blur(15px)'}} className={this.props.className}>
        <video
            autoPlay
            muted
            preload="auto"
            volume="0"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
            onEnded={this.changeVideo}
        >
          <source src={this.getVideo()} type="video/webm" />
        </video>
      </div>
    )
  }
}

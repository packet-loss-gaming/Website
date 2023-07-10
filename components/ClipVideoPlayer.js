import React from 'react';

const NUM_VIDEOS = 3;

export default class ClipVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  getVideo = () => {
    let videoNum = Math.floor(Math.random() * NUM_VIDEOS);
    return `/static/videos/game-${videoNum}.webm`;
  }

  changeVideo = () => {
    let videoPlayer = this.videoRef.current;

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

  componentDidMount = () => {
    this.changeVideo();
  }

  render = () => {
    return (
      <div style={{filter: 'blur(15px)'}} className={this.props.className}>
        <video
            muted
            preload="auto"
            volume="0"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
            onEnded={this.changeVideo}
            ref={this.videoRef}
        />
      </div>
    )
  }
}

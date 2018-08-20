import React, { Component } from 'react';
import './css/video.css';

class Video extends Component {
  /*
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.handlePlayEvent === this.props.handlePlayEvent) {
      return false;
    } else {
      return true;
    }
  }
  */
  render() {
    console.log("Rendering: VideoComponent");
    var size = 'shrink';
    if (this.props.videoSize) {
      size = 'expand';
    }

    /*
    var videoStyle = {
      animationDuration: '1s',
      animationTimingFunction: 'ease',
      animationFillMode: 'forwards'
    }
    */


    /** add     style={videoStyle}   to comp*/
    /**
    <video
    width="280"
    height="157"
    onPlay={this.props.handlePlayEvent}
    >
   <source src="https://www.youtube.com/embed/M7lc1UVf-VE" type="videp/mp4" />
         Your browswer does not support html5 video
    </video>
    */
    return(

      <button className={size} onClick={this.props.handleMouseDown}>
        <iframe
            onPlay={this.props.handlePlayEvent}
            onPause={this.props.handlePlayEvent}
            title="videoTitle"
            id="ytplayer"
            type="text/html"
            width="280"
            height="157"
            src="https://www.youtube.com/embed/M7lc1UVf-VE"
            frameBorder="0"
            allowFullScreen
            >
        </iframe>
        <h2> Video Title </h2>
      </button>
  );
  }
}

export default Video;

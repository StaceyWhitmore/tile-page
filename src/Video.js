import React, { Component } from 'react';
import UpperText from './UpperText';
//import UpperParagraph from './UpperParagraph';
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

  renderUpperText() {
    if (!this.props.videoSize)  {
      return (<UpperText />);


    } else {
      return(null);
    }
  }





  render() {
    console.log("Rendering: VideoComponent");
    var size = 'shrink';
    var float = 'left';

    if (this.props.videoSize) {
      size = 'expand';
      float = 'none';

    }
    /*
    var visibility = 'show';
    if (this.props.paragraphVisibility) {
      visibility = 'hide'
    }
    */

    var videoContainerStyle = {
      padding: '20px',
      position: 'relative'
    }


    return(
    <div>
      <button className={size} onClick={this.props.handleMouseDown} style={videoContainerStyle}>

      <iframe
          className={float}
          onPlay={this.props.handlePlayEvent}
          onPause={this.props.handlePlayEvent}
          title="videoTitle"
          id="ytplayer"
          type="text/html"
          width="280"
          height="157.5"
          src="https://www.youtube.com/embed/jz9DVB42AA4"
          frameBorder="0"
          allowFullScreen>
      </iframe>
      {this.renderUpperText()}
      </button>
    </div>

  );
  }
}

export default Video;

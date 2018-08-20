import React, { Component } from 'react';
import Video from './Video';
import Paragraph from './Paragraph';
import './css/tile.css';
//import ReactDOM from 'react-dom';

class Tile extends Component {
  constructor(props, context) {
    super(props, context);
    /*
    playPressed: false,
    isPlaying: false
    */
    this.state = {
      expanded:false

    }
    //this.handlePlayEvent = this.handlePlayEvent.bind(this);
    this.handleMouseDown= this.handleMouseDown.bind(this);
    this.expandVideo = this.expandVideo.bind(this);
  }
  /*
  componentDidMount() {
    window.addEventListener("onPlay", this.handlePlayEvent.bind(this));
  }

  componentWillUnmount() {
    window.addEventListener("onPlay", this.handlePlayEvent.bind(this));
  }
  */
  /*
  handlePlayEvent(e) {
    this.expandVideo();
    //console.log(Array(16).join("bat" - 1) + " Batman!");
    console.log('handlePlayEvent() called ');
    e.stopPropagation();
  }
  */


  handleMouseDown(e) {
    this.expandVideo();
    console.log("handleMouseDown() invoked 'click' ");

    e.stopPropagation();
  }


  expandVideo() {
    /*
    playPressed: !this.state.playPressed,
    isPlaying: !this.state.isPlaying
    */
    this.setState({
        expanded: !this.state.expanded
    });
  }
  render() {
    console.log('rendering: Tile Component')

    var flexContainerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'left',
      flexDirection: 'row'
    }

    return(
      <div className="flexContainer" style={flexContainerStyle}>
        <Video
          handleMouseDown={this.handleMouseDown}
          handlePlayEvent={this.handlePlayEvent}
          videoSize={this.state.expanded} />
      <Paragraph
          paragraphVisibility={this.state.expanded}/>
      </div>
    );
  }
}
export default Tile;

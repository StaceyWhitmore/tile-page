import React, { Component } from 'react';
import Video from './Video';
//import UpperParagraph from './UpperParagraph';
import UpperText from './UpperText';
import LowerText from './LowerText'
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

  renderLower() {
    if(this.state.expanded) {
      return (
        <LowerText paragraphVisibility={this.state.expanded}/>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    console.log('rendering: Tile Component')

    var flexContainerStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      /*justifyContent: 'left',*/
      flexDirection: 'column',
    }


    /*
    var upperText = {
      float: 'right'
    }
    */

    return(
      <div className="flexContainer" style={flexContainerStyle}>
        <Video
          handleMouseDown={this.handleMouseDown}
          handlePlayEvent={this.handlePlayEvent}
          videoSize={this.state.expanded} />
          <br/><br/><br/>
          {this.renderLower()}
      </div>
    );
  }
}
export default Tile;

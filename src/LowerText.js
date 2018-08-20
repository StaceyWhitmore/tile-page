import React, { Component } from 'react';
import './css/upperText.css';

class LowerText extends Component {

render() {
  var videoDescriptionStyle = {
    marginTop: '80px',
    position: 'relative',

  }

  var newsReleaseStyle = {
    marginBottom: 'unset',
    textAlign: 'left',
    fontSize: '15px',
    color: 'lightgray'
  }

  var topTitleStyle = {
    /*float:'right',*/
    marginTop: 'unset',
    marginBottom: 'unset',
    color: 'gray',
    fontSize: '40px',
    textAlign: 'left',
    fontWeight: '300'
  }

  var paragraphStyle = {
    justifyContent: 'flexend',
    marginTop: '20px'
  }


  return(
    <div className="videoDescription" style={videoDescriptionStyle}>
        <p className="newsRelease">News Release</p>
        <p className="topTitle">University of Utah Names Historic Building After President Monson.</p>
        <p className="paragraph"> CSS Animations do not work in Internet Explorer 9 and earlier versions. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat
          a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. </p>
    </div>
  );
}
}

export default LowerText;

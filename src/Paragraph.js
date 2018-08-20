import React, { Component } from 'react';
import './css/paragraph.css';

class Paragraph extends Component {
  /*
  shouldComponentUpdate(nextProps, nextState) {
    //if (this.props.paragraphVisibility) {

      return false;
    //}
  }
  */
  render() {
    console.log('rendering: Paragraph Component');

    var visibility = 'show';
    if (this.props.paragraphVisibility) {
      visibility = 'hide'
    }


    return(
      <div className={visibility} id="paragraph">
        <p className="paragraph"><strong>Note:</strong> CSS Animations do not work in Internet Explorer 9 and earlier versions. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat
          a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
    );
  }
}

export default Paragraph;

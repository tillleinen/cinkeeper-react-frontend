'use strict';

var React = require('react/addons');
var VideoItem = require('./VideoItem.js');

require('styles/Film.sass');

var Film = React.createClass({
  render: function () {
    return (
      <div className="video-overview">
        <ul className="video-overview__list">
          <VideoItem imageSrc="../../images/video2.png"/>
          <VideoItem imageSrc="../../images/video3.png"/>
          <VideoItem imageSrc="../../images/video4.png"/>
          <VideoItem imageSrc="../../images/video5.png"/>
          <VideoItem imageSrc="../../images/video6.png"/>
          <VideoItem imageSrc="../../images/video7.png"/>
          <VideoItem imageSrc="../../images/video1.png"/>
        </ul>
      </div>
    );
  }
});

module.exports = Film; 


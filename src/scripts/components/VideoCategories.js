'use strict';

var React = require('react/addons');
var VideoCategory = require('./VideoCategory.js');

require('styles/VideoCategories.sass');

var VideoCategories = React.createClass({
  render: function () {
    return (
        <ul className="video-category-list"> 
          <VideoCategory name="Music" imageSrc="../../images/video1.jpg" />
          <VideoCategory name="Lifestyle" imageSrc="../../images/video2.jpg" />
          <VideoCategory name="Shortfilm" imageSrc="../../images/video3.jpg" />
          <VideoCategory name="Fashion" imageSrc="../../images/video4.jpg" />
        </ul>
      );
  }
});

module.exports = VideoCategories; 


'use strict';

var React = require('react/addons');
var VideoCategoryItem = require('./VideoCategoryItem.js');

require('styles/VideoCategories.sass');

var VideoCategories = React.createClass({
  render: function () {
    return (
        <ul className="video-category-list"> 
          <VideoCategoryItem name="Music" imageSrc="../../images/video1.jpg" />
          <VideoCategoryItem name="Lifestyle" imageSrc="../../images/video2.jpg" />
          <VideoCategoryItem name="Shortfilm" imageSrc="../../images/video3.jpg" />
          <VideoCategoryItem name="Fashion" imageSrc="../../images/video4.jpg" />
        </ul>
      );
  }
});

module.exports = VideoCategories; 


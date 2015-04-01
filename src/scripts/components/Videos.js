'use strict';

var React = require('react/addons');
var VideoItem = require('./VideoItem.js');

require('styles/Videos.sass');

var Videos = React.createClass({
  render: function () {
    return (
        <ul className="video-list">
          <VideoItem imageSrc="../../images/video1.jpg" caption="Mortis x Making Of x Hollywoodpsychose x 2014" />
          <VideoItem imageSrc="../../images/video4.jpg" caption="Fuchsteufelswild x PARADIGMA x Teaser I" />
          <VideoItem imageSrc="../../images/video6.jpg" caption="FAVRY x PRAY x 2014" />
          <VideoItem imageSrc="../../images/video3.jpg" caption="Klangpoet x 4U x Wildcard Contest ESC 2015" />
          <VideoItem imageSrc="../../images/video5.jpg" caption="JD Collection 2014 x THREE" />
          <VideoItem imageSrc="../../images/video7.jpg" caption="THE WORLD IS YOURS x 99FFA x 2015 x TOP99" />
          <VideoItem imageSrc="../../images/video2.jpg" caption="CINEKEEPER x SHOWREEL x 2015" />
        </ul>
      );
  }
});

module.exports = Videos; 


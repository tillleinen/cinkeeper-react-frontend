'use strict';

var React = require('react/addons');

var $ = require('jquery');

require('styles/Home.sass');

var Home = React.createClass({
  composeStyle: function () {
    var bodyHeight = $(window).innerHeight();
    var headerHeight = $('header').outerHeight();
    var footerHeight = $('footer').outerHeight();
    
    var availableHeight = this.calcAvailableHeight(bodyHeight, headerHeight, footerHeight);
    var availableWidth = $(window).innerWidth();

    var videoWidth = 1920;
    var videoHeight = 814;

    var availableAspectRatio = availableWidth / availableHeight;
    var videoAspectRatio = videoWidth / videoHeight;

    if(availableAspectRatio > videoAspectRatio) {
      var scaling = availableWidth / videoWidth;

      var scaledVideoHeight = videoHeight * scaling;
      var scaledVideoWidth = videoWidth * scaling;

      return {
        width: scaledVideoWidth + "px",
        height: scaledVideoHeight + "px",
        left: 0,
        top: ((availableHeight - scaledVideoHeight) / 2 + 60) + "px"
      };
    } else {
      var scaling = availableHeight / videoHeight;

      var scaledVideoHeight = videoHeight * scaling;
      var scaledVideoWidth = videoWidth * scaling;

      return {
        width: scaledVideoWidth + "px",
        height: scaledVideoHeight + "px",
        left: ((availableWidth - scaledVideoWidth) / 2) + "px",
        top: 60 + "px"
      };
    }
  },

  calcAvailableHeight: function (bodyHeight, headerHeight, footerHeight) {
    return bodyHeight - (headerHeight + footerHeight);
  },
  
  render: function () {
    return (
      <div className="home">
        <video className="home__video" style={this.composeStyle()} preload autoPlay loop="true">
          <source src="../videos/home.webm" type="video/webm" />
          <source src="../videos/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
});

module.exports = Home; 


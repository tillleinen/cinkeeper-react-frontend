'use strict';

var React = require('react/addons');

var $ = require('jquery');

require('styles/FullscreenVideo.sass');

var FullscreenVideo = React.createClass({  

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
      return this.calculatePortraitStyle(availableWidth, availableHeight, videoWidth, videoHeight);
    } else {
      return this.calculateLandscapeStyle(availableWidth, availableHeight, videoWidth, videoHeight);
    }
  },

  calculatePortraitStyle: function (availableWidth, availableHeight, videoWidth, videoHeight) {
    var scaling = availableWidth / videoWidth;

    var scaledVideoHeight = videoHeight * scaling;
    var scaledVideoWidth = videoWidth * scaling;

    return {
      width: scaledVideoWidth + "px",
      height: scaledVideoHeight + "px",
      left: 0,
      top: ((availableHeight - scaledVideoHeight) / 2 + 60) + "px"
    };
  },

  calculateLandscapeStyle: function (availableWidth, availableHeight, videoWidth, videoHeight) {
    var scaling = availableHeight / videoHeight;

    var scaledVideoHeight = videoHeight * scaling;
    var scaledVideoWidth = videoWidth * scaling;

    return {
      width: scaledVideoWidth + "px",
      height: scaledVideoHeight + "px",
      left: ((availableWidth - scaledVideoWidth) / 2) + "px",
      top: 60 + "px"
    };
  },

  calcAvailableHeight: function (bodyHeight, headerHeight, footerHeight) {
    return bodyHeight - (headerHeight + footerHeight);
  },

  composeClassName: function () {
    return this.props.className += " fullscreen_video"
  },
  
  render: function () {
    return (
        <video className={this.composeClassName()} style={this.composeStyle()} preload autoPlay loop="true">
          {
            this.props.videoSources.map(function (videoSource, index) {
              return <source src={videoSource.src} type={videoSource.type} />;
            })
          }
          Your browser does not support the video tag.
        </video>
      );
  }
});

module.exports = FullscreenVideo; 


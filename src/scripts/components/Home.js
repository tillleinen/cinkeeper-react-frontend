'use strict';

var React = require('react/addons');

var FullscreenVideo = require('./FullscreenVideo.js');

require('styles/Home.sass');

var Home = React.createClass({
  render: function () {
    var videoSources = [
      {
        src: '../videos/home.webm',
        type: 'video/webm'
      },
      {
        src: '../videos/home.mp4',
        type: 'video/mp4'        
      }
    ];

    return (
      <div className="home">
        <FullscreenVideo className="home__video" videoSources={videoSources} width={1920} height={814} />
      </div>
    );
  }
});

module.exports = Home; 


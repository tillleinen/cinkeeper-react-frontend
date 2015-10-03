'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var AboutItem = require('./AboutItem');
var FullscreenVideo = require('./FullscreenVideo.js');

var $ = require('jquery');

var Device = require('../utils/Device.js');

require('styles/About.sass');

var About = React.createClass({
  getInitialState: function () {
    return {
      video: false
    };
  },

  componentWillMount: function () {
    $(window).on('resize', this.setVideo).trigger('resize');
  },

  componentWillUnmount: function () {
    $(window).off('resize', this.setVideo);
  },

  setVideo: function () {
    this.setState({
      video: !Device.isMobile()
    });
  },
  
  render: function () {
    var videoSources = [
      {
        src: '../videos/about.mp4',
        type: 'video/mp4'        
      }
    ];

    var video = "";
    if(this.state.video) {
      video = <FullscreenVideo className="about-overview__video" videoSources={videoSources} width={1920} height={1080} />;
    }

    return (
        <div className="about-container">
          <ul className="about-overview">
            {video}
          	<div className="about-overview__left">
              <AboutItem linkTo="clients" className="clients" text="Clients" />
			<AboutItem linkTo="behindthescenes" className="behind-the-scenes" text="Behind the Scenes" />
            </div>
            <div className="about-overview__center">
              <AboutItem className="we" text="We" />
            </div>
            <div className="about-overview__right">
              <AboutItem linkTo="contact" className="contact" text="Contact" />
              <AboutItem linkTo="imprint" className="imprint" text="Impressum" />
          	</div>
          </ul>
        </div>
      );
  }
});

module.exports = About; 


'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var AboutItem = require('./AboutItem');

var $ = require('jquery');

var Device = require('../utils/Device.js');

require('styles/About.scss');

var About = React.createClass({
  componentWillMount: function () {
    $(window).on('resize', this.setVideo).trigger('resize');
  },

  componentWillUnmount: function () {
    $(window).off('resize', this.setVideo);
  },

  setVideo: function () {
    this.setState({
      video: Device.isDesktop()
    });
  },

  render: function () {
    return (
        <div className="about-container">
          <ul className="about-overview">
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


'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var AboutItem = require('./AboutItem');

require('styles/About.sass');

var About = React.createClass({
  render: function () {
    return (
        <div className="about-container">
          <ul className="about-overview">
          	<div className="about-overview__left">
              <AboutItem linkTo="clients" className="clients" text="Clients" imageSrc="../../images/Bildschirmfoto_2015-02-19_um_03.08.12.png" />
	          	<AboutItem linkTo="behindthescenes" className="behind-the-scenes" text="Behind the Scenes" imageSrc="../../images/DSC_0022.jpg" />
            </div>
            <div className="about-overview__center">
              <AboutItem className="we" text="We" imageSrc="../../images/P1130522.jpg" />
            </div>
            <div className="about-overview__right">
              <AboutItem linkTo="contact" className="contact" text="Contact" imageSrc="../../images/DSC_0162.jpg" />
              <AboutItem linkTo="imprint" className="imprint" text="Impressum" imageSrc="../../images/IMG_8165.jpg" />
          	</div>
          </ul>
        </div>
      );
  }
});

module.exports = About; 


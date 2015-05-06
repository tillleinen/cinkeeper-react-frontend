'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var AboutItem = require('./AboutItem');

require('styles/About.sass');

var About = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  isSubpage: function (argument) {
    var path = this.context.router.getCurrentPath();
    var isSubpage = !!path.split('/')[2];
    return isSubpage;
  },

  render: function () {
    var subpage = (this.isSubpage() ? <div className="about-subpage"><RouteHandler/></div>:'');

    return (
        <div className="about-container">
          <ul className="about-overview">
          	<div className="about-overview__left">
              <AboutItem linkTo="clients" className="clients" text="Clients" imageSrc="../../images/DSC_0463.jpg" />
	          	<AboutItem linkTo="behindthescenes" className="behind-the-scenes" text="Behind the Scenes" imageSrc="../../images/IMG_7025.jpg" />
            </div>
            <div className="about-overview__center">
              <AboutItem className="we" text="We" imageSrc="../../images/DSC_0273.jpg" />
            </div>
            <div className="about-overview__right">
              <AboutItem linkTo="contact" className="contact" text="Kontakt" imageSrc="../../images/IMG_0768.jpg" />
              <AboutItem linkTo="imprint" className="imprint" text="Impressum" imageSrc="../../images/IMG_1413.jpg" />
          	</div>
          </ul>
          {subpage}
        </div>
      );
  }
});

module.exports = About; 


'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/Footer.sass');

var Footer = React.createClass({
  render: function () {
  return (
    <footer className="footer">
      <div className="footer__social-buttons">
      <a href="">
        <img src="../../images/social_facebook.png"></img>
      </a>
      <a href="">
        <img src="../../images/social_instagram.png"></img>
      </a>
      <a href="">
        <img src="../../images/social_vimeo.png"></img>
      </a>
      </div>
      <div className="footer_imprint">
        <Link to="imprint">Imprint</Link>
      </div>
    </footer>
    );
  }
});

module.exports = Footer; 


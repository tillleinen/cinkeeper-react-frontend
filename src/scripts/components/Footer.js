'use strict';

var React = require('react/addons');

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
    </footer>
    );
  }
});

module.exports = Footer; 


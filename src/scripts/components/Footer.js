'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/Footer.sass');

var Footer = React.createClass({
  render: function () {
  return (
    <footer className="footer">
      <ul className="footer__social-buttons">
        <li className="footer__social-buttons__item">
          <a href="https://www.facebook.com/Cinekeeper" target="_blank" className="social_btn">
            <img className="footer__social-buttons__item__image" src="/images/social_facebook.png" alt="Cinekeeper on Facebook" />
          </a>
        </li>
        <li className="footer__social-buttons__item">
          <a href="https://vimeo.com/cinekeeper" target="_blank" className="social_btn">
            <img className="footer__social-buttons__item__image" src="/images/social_vimeo.png" alt="Cinekeeper on Vimeo" />
          </a>
        </li>
        <li className="footer__social-buttons__item footer__social-buttons__item--link">
          <Link to="about">
            About Us
          </Link>
        </li>
        <li className="footer__social-buttons__item">
          <a href="https://instagram.com/cinekeeper/" target="_blank" className="social_btn">
            <img className="footer__social-buttons__item__image" src="/images/social_instagram.png" alt="Cinekeeper on Instagram" />
          </a>
        </li>
        <li className="footer__social-buttons__item">
          <a href="mailto:info@cinekeeper.de" className="social_btn">
            <img className="footer__social-buttons__item__image" src="/images/social_mail.png" alt="Drop us a mail" />
          </a>
        </li>
      </ul>
      <div className="footer_imprint">
        <Link to="imprint">Imprint</Link>
      </div>
    </footer>
    );
  }
});

module.exports = Footer; 


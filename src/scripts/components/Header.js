'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/Header.sass');

var Header = React.createClass({
  render: function () {
  return (
    <header className="header">
      <Link to="home">
        <img className="header__logo" src="../../images/logo.png"></img>
      </Link>
      <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item nav__list__item--left nav__list__item--current">
          <Link to="film">Film</Link>
        </li>
        <li className="nav__list__item">
          <Link to="photo">Foto</Link>
        </li>
        <li className="nav__list__item nav__list__item--right">
          <Link to="about">About us</Link>
        </li>
      </ul>
      </nav>
    </header>
    );
  }
});

module.exports = Header; 


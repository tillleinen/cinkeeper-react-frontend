'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var $ = require('jquery');

require('styles/Header.sass');

var Header = React.createClass({
  render: function () {
    return (
      <header className="header">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list__item nav__list__item--left">
              <Link to="film">Film</Link>
            </li>
            <li className="nav__list__item nav__list__item--right">
              <Link to="photo">Photo</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = Header; 


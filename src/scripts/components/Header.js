'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var $ = require('jquery');

require('styles/Header.sass');

var Header = React.createClass({
  componentDidMount: function () {
    var min_height = 50;
    // var max_height = React.findDOMNode(this.refs.header);
    // console.log(React.findDOMNode);

    // $(document).on('scroll', function () {
    //   console.log($(document).scrollTop());
    // });
  },

  render: function () {
    return (
      <header className="header header--collapsed">
        <Link className="header__logo" to="home">
          <img src="../../images/logo.png"></img>
        </Link>
        <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list__item nav__list__item--left">
            <Link to="film">Film</Link>
          </li>
          <li className="nav__list__item">
            <Link to="about">About us</Link>
          </li>
          <li className="nav__list__item nav__list__item--right">
            <Link to="photo">Foto</Link>
          </li>
        </ul>
        </nav>
      </header>
    );
  }
});

module.exports = Header; 


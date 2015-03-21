'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var Header = require('./Header.js');
var Footer = require('./Footer.js');

var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var Cinekeeper = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <RouteHandler/>
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Cinekeeper;

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/Film.sass');

var Film = React.createClass({
  render: function () {
    return (
      <div className="film">
        <RouteHandler />
      </div>
    );
  }
});

module.exports = Film; 


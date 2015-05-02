'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/PhotoItem.sass');

var PhotoItem = React.createClass({
  render: function () {
    return (
      <li className="photo-item">
      	<Link to="photo">
      		<img src={this.props.imageSrc} />
      	</Link>
      </li>
    );
  }
});

module.exports = PhotoItem; 


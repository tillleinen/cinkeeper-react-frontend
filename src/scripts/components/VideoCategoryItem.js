'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/VideoCategoryItem.sass');

var VideoCategoryItem = React.createClass({
  render: function () {
  	var imageStyle = {
  		backgroundImage: 'url(' + this.props.imageSrc + ')'
  	};

    return (
        <li className="video-category">
        	<Link to="category" params={{categoryName: 'test'}} >
	        	<div className="video-category__image" style={imageStyle}></div>
	        	<div className="video-category__overlay">
	        		<div className="video-category__overlay__caption">{this.props.name}</div>
	        	</div>
	        </Link>
        </li>
      );
  }
});

module.exports = VideoCategoryItem; 

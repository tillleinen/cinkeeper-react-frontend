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

    var classString = 'video-category';
    if(this.props.selectedCategory === this.props.slug) {
      classString += ' video-category--selected';
    }

    return (
        <li className={classString} id={this.props.slug}>
        	<Link to="category" params={{categorySlug: 'test'}} onClick={this.props.onClick}>
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

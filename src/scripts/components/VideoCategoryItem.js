'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/VideoCategoryItem.sass');

var VideoCategoryItem = React.createClass({

  composeClassString: function () {
    var classString = 'video-category';
    if(this.props.selectedCategory === this.props.data.slug) {
      classString += ' video-category--selected';
    }
    if(this.props.isClosable) {
      classString += ' isClosable'; 
    }
    return classString;
  },

  render: function () {
  	var imageStyle = {
  		backgroundImage: 'url(' + this.props.data.imageSrc + ')'
  	};

    return (
        <li className={this.composeClassString()} id={this.props.data.slug}>
        	<Link to="category" params={{categorySlug: this.props.data.slug}} onClick={this.props.onClick}>
	        	<div className="video-category__image" style={imageStyle}></div>
	        	<div className="video-category__overlay">
	        		<div className="video-category__overlay__caption">{this.props.data.name}</div>
	        	</div>
	        </Link>
        </li>
      );
  }
});

module.exports = VideoCategoryItem; 

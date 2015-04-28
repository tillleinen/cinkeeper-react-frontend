'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/VideoCategoryItem.sass');

var VideoCategoryItem = React.createClass({

  composeClassString: function () {
    var classString = 'video-category';
    if(this.props.isSelected) {
      classString += ' video-category--selected isClosable'; 
    }
    return classString;
  },

  composeImageStyle: function () {
    return {
      backgroundImage: 'url(' + this.props.data.imageSrc + ')'
    };
  },

  composeLink: function () {
    return this.props.isSelected ? "categories" : "category";
  },

  composeStyle: function () {
    var translateY = this.props.hasSelectedCategory ? 0 : this.props.index * 100;
    return {
      'transform': 'translate3d(0,' + translateY + '%,0)'
    };
  },

  render: function () {
    return (
        <li className={this.composeClassString()} id={this.props.data.slug} style={this.composeStyle()}>
        	<Link to={this.composeLink()} params={{categorySlug: this.props.data.slug}} onClick={this.props.onClick}>
	        	<div className="video-category__image" style={this.composeImageStyle()}></div>
	        	<div className="video-category__overlay">
	        		<div className="video-category__overlay__caption">{this.props.data.name}</div>
              <Link className="video-category__overlay__btn-close btn-close" to="categories">Close</Link>
	        	</div>
	        </Link>
        </li>
      );
  }
});

module.exports = VideoCategoryItem; 

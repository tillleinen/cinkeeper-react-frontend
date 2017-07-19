'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var ResponsiveImage = require('../utils/ResponsiveImage');

var $ = require('jquery');

require('styles/VideoCategoryItem.scss');

var VideoCategoryItem = React.createClass({

  componentDidMount: function () {
    this.props.onMount();
  },

  composeClassString: function () {
    var classString = 'video-category';
    if(this.props.isSelected) {
      classString += ' video-category--selected isClosable';
    }
    return classString;
  },

  composeImageStyle: function () {
    return {
      backgroundImage: 'url(' + this.getImageURL() + ')'
    };
  },

  composeLink: function () {
    return this.props.isSelected ? "categories" : "category";
  },

  composeStyle: function () {
    var translateY = this.props.hasSelectedCategory ? 0 : this.props.index * 100;
    return {
      'transform': 'translate3d(0,' + translateY + '%,0)',
      '-moz-transform': 'translate3d(0,' + translateY + '%,0)',
      '-ms-transform': 'translate3d(0,' + translateY + '%,0)',
      '-webkit-transform': 'translate3d(0,' + translateY + '%,0)'
    };
  },

  getImageURL: function () {
    return ResponsiveImage(
      this.props.data.image.image.large.url,
      this.props.data.image.image.medium.url,
      this.props.data.image.image.small.url
    );
  },

  render: function () {
    return (
        <li className={this.composeClassString()} id={this.props.data.slug} style={this.composeStyle()}>
        	<Link to={this.composeLink()} params={{categorySlug: this.props.data.slug}} onClick={this.props.onClick}>
	        	<div className="video-category__image" style={this.composeImageStyle()}></div>
	        	<div className="video-category__overlay">
	        		<div className="video-category__overlay__caption">{this.props.data.name}</div>
                    <div className="video-category__overlay__btn-close btn-close" to="categories">Close</div>
	        	</div>
	        </Link>
        </li>
      );
  }
});

module.exports = VideoCategoryItem;

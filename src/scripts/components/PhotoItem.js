'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var ResponsiveImage = require('../utils/ResponsiveImage');

var $ = require('jquery');

require('styles/PhotoItem.sass');

var PhotoItem = React.createClass({
	getInitialState: function () {
		return {
			height: 0
		};
	},

	componentDidMount: function () {
		$(window).on('resize', this.setHeight).trigger('resize');
	},

	componentWillUnmount: function () {
		$(window).off('resize', this.setHeight);
	},

	selectImage: function (e) {
		if(this.props.isZoomed) {
			return this.props.onSelect(null);	
		}
		this.props.onSelect(this.props.photo.id);
	},

	setHeight: function () {
		if (this.isMounted()) {
			var width = $(this.getDOMNode()).parent().width();
			var photoScale = width / this.props.photo.width;
			this.setState({ height: Math.round(this.props.photo.height * photoScale)});
		}
	},

	getImageURL: function () {
		return ResponsiveImage(
			this.props.photo.image.image.medium.url,
			this.props.photo.image.image.small.url,
			this.props.photo.image.image.small.url
		);
	},

  render: function () {
    return (
      <li className="photo-item" onClick={this.selectImage}>
   		<img src={this.getImageURL()} style={{ height: this.state.height + 'px' }} />
      </li>
    );
  }
});

module.exports = PhotoItem; 


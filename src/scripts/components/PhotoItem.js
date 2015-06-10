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
			height: 0,
			zoomTranslateX: 0,
			zoomTranslateY: 0,
			zoomScale: 1
		};
	},

	componentDidMount: function () {
		$(window).on('resize', this.handleResize).trigger('resize');
	},

	componentWillUnmount: function () {
		$(window).off('resize', this.handleResize);
	},

	handleResize: function () {
		if (this.isMounted()) {
			this.setHeight();
			this.setZoomTranslation();
			this.setZoomScale();
		}
	},

	setHeight: function () {
		var rowWidth = $(this.getDOMNode()).parent().width();
		var photoScale = rowWidth / this.props.photo.width;
		this.setState({ height: Math.round(this.props.photo.height * photoScale)});
	},

	setZoomTranslation: function () {
		var offset = this.computeOffset();
		var center = this.computeCenter();
		var dimensions = this.computeDimensions();

		this.setState({
			zoomTranslateX: center.x - offset.x - dimensions.width/2,
			zoomTranslateY: center.y - offset.y - dimensions.height/2
		});
	},

	computeOffset: function () {
		var domNode = $(this.getDOMNode());

		return {
			x: domNode[0].getBoundingClientRect().left,
			y: domNode[0].getBoundingClientRect().top
		};
	},

	computeCenter: function () {
		var availableHeight = this.getAvailableHeight();
		var availableWidth = $(window).width();

		return {
			x: availableWidth / 2,
			y: availableHeight / 2
		};
	},

	getAvailableHeight: function () {
		var bodyHeight = $(window).innerHeight();
		var headerHeight = $('header').outerHeight();
		var footerHeight = $('footer').outerHeight();
		return this.calcAvailableHeight(bodyHeight, headerHeight, footerHeight);
	},

	calcAvailableHeight: function (bodyHeight, headerHeight, footerHeight) {
		return bodyHeight - (headerHeight + footerHeight);
	},


	computeDimensions: function () {
		var domNode = $(this.getDOMNode());

		return {
			width: domNode.height(),
			height: domNode.width()
		};
	},

	setZoomScale: function () {
		this.setState({
			zoomScale: 1
		});
	},





	// setScale: function (width, height, availableWidth, availableHeight) {
	// 	var aspectRatio = width/height;
	// 	var availableAspectRatio = availableWidth/availableHeight;

	// 	var scale = (aspectRatio > availableAspectRatio) ? (availableWidth / width) : (availableHeight / height);

	// 	this.setState({
	// 		scale: scale
	// 	});
	// },



	selectImage: function (e) {
		var isAlreadySelected = this.props.isZoomed;
		if(isAlreadySelected) {
			return this.unselectImage();
		}
		this.props.onSelect(this.props.photo.id);
	},

	unselectImage: function () {
		this.props.onSelect(null);
	},


		// setTimeout(function() {
		// 	var domNode = $(this.getDOMNode());
		// 	var height = domNode.height();
		// 	var width = domNode.width();

		// 	var offsetX = domNode[0].getBoundingClientRect().left;
		// 	var offsetY = domNode[0].getBoundingClientRect().top;

		// 	var availableHeight = this.getAvailableHeight();
		// 	var windowHeight = $(window).height();
		// 	var availableWidth = $(window).width();

		// 	this.setScale(width, height, availableWidth, availableHeight);



	composeStyle: function () {
		var style = {};

		if(this.props.isZoomed) {
			style['transform'] = 'translate3d(' + this.state.zoomTranslateX + 'px, ' + this.state.zoomTranslateY + 'px, 0) scale(' + this.state.zoomScale + ')';
			style['opacity'] = 1;
			style['zIndex'] = 100;
		}

		return style;
	},

	composeImageStyle: function () {
		return {
			height: this.state.height
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
      <li className="photo-item" onClick={this.selectImage} style={this.composeStyle()}>
		<img className="photo-item__image" src={this.props.photo.image.image.medium.url} style={this.composeImageStyle()} />
      </li>
    );
  }
});

module.exports = PhotoItem; 


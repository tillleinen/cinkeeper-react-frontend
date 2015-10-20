'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var ResponsiveImage = require('../utils/ResponsiveImage');
var Device = require('../utils/Device.js');

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
		$(window).on('resize', this.handleResize);
		this.handleResize();
	},

	componentWillUnmount: function () {
		$(window).off('resize', this.handleResize);
	},

	handleResize: function () {
		if (this.isMounted()) {
			this.setHeight();
			setTimeout(function () {
				this.setZoomScale();
				this.setZoomTranslation();
			}.bind(this), 100);
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

		var scaledWidth = dimensions.width * this.state.zoomScale;
		var scaledHeight = dimensions.height * this.state.zoomScale;

		this.setState({
			zoomTranslateX: center.x - offset.x - dimensions.width/2,
			zoomTranslateY: center.y - offset.y - dimensions.height/2
		});
	},

	computeOffset: function () {
		var domNode = $(this.getDOMNode());

		return {
			x: domNode[0].getBoundingClientRect().left,
			y: domNode[0].getBoundingClientRect().top - 60
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
			width: domNode.width(),
			height: domNode.height()
		};
	},

	setZoomScale: function () {
		var dimensions = this.computeDimensions();
		var width = dimensions.width;
		var height = dimensions.height;

		var aspectRatio = width/height;
		var availableWidth = $(window).width();
		var availableHeight = this.getAvailableHeight();
		var availableAspectRatio = availableWidth/availableHeight;

		var scale = (aspectRatio > availableAspectRatio) ? (availableWidth / width) : (availableHeight / height);

		this.setState({
			zoomScale: scale
		});
	},

	selectImage: function (e) {
		if(!Device.isMobile()) {
			var isAlreadySelected = this.props.isZoomed;
			if(isAlreadySelected) {
				return this.unselectImage();
			}
			this.props.onSelect(this.props.photo.id);
		}
	},

	unselectImage: function () {
		this.props.onSelect(null);
	},

	composeStyle: function () {
		var style = {};

		if(this.props.isZoomed) {
			var scrollPosition = $(document).scrollTop();
			var parentTranslationY = this.getTranslationYOfParent();
			var translateY = this.state.zoomTranslateY + scrollPosition - parentTranslationY;

			var transform = 'translate3d(' + this.state.zoomTranslateX + 'px, ' + translateY + 'px, 0) scale(' + this.state.zoomScale + ')';
			style['transform'] = transform;
			style['-ms-transform'] = transform;
			style['-webkit-transform'] = transform;
			style['opacity'] = 1;
			style['zIndex'] = 100;
		}

		return style;
	},

	getTranslationYOfParent: function () {
		var transformString = $(this.getDOMNode()).parent().css('transform');
		var transformStringParts = transformString.split(",");
		var translateY = parseFloat(transformStringParts[transformStringParts.length - 1]);
		return translateY;
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

	composeClassName: function () {
		var className = "photo-item";

		if(Device.isMobile()) {
			className += " photo-item--mobile";
		}

		return className;
	},

  render: function () {
    return (
      <li className={this.composeClassName()} onClick={this.selectImage} style={this.composeStyle()}>
		<img className="photo-item__image" src={this.props.photo.image.image.medium.url} style={this.composeImageStyle()} />
      </li>
    );
  }
});

module.exports = PhotoItem; 


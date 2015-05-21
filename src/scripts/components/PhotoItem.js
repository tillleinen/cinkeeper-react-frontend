'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var $ = require('jquery');

require('styles/PhotoItem.sass');

var PhotoItem = React.createClass({
	getInitialState: function () {
		return {
			height: 0,
			translateX: 0,
			translateY: 0,
			scale: 1
		};
	},

	componentDidMount: function () {
		setTimeout(function() {
			var domNode = $(this.getDOMNode());
			var height = domNode.height();
			var width = domNode.width();

			var offsetX = domNode.offset().left;
			var offsetY = domNode.offset().top;
			
			var availableHeight = this.getAvailableHeight();
			var windowHeight = $(window).height();
			var availableWidth = $(window).width();

			this.setTranslation(offsetX, offsetY, width, height, availableWidth, windowHeight);
			this.setScale(width, height, availableWidth, availableHeight);	

		}.bind(this), 1000);

		this.setHeight();
	},

	selectImage: function (e) {
		if(this.props.isZoomed) {
			return this.props.onSelect(null);	
		}
		this.props.onSelect(this.props.photo.id);
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

	setScale: function (width, height, availableWidth, availableHeight) {
		var aspectRatio = width/height;
		var availableAspectRatio = availableWidth/availableHeight;

		var scale = (aspectRatio > availableAspectRatio) ? (availableWidth / width) : (availableHeight / height);

		this.setState({
			scale: scale
		});
	},

	setTranslation: function (offsetX, offsetY, width, height, availableWidth, availableHeight) {
		var centerX = availableWidth / 2;
		var centerY = availableHeight / 2;

		this.setState({
			translateX: centerX - offsetX - width/2,
			translateY: centerY - offsetY - height/2
		});
	},

	composeStyle: function () {
		if(!this.props.isZoomed) {
			return {};
		}

		return {
			'transform': 'translate3d(' + this.state.translateX + 'px, ' + this.state.translateY + 'px, 0) scale(' + this.state.scale + ')',
			'opacity': 1,
			'z-index': 100
		};
	},

	setHeight: function () {
		var width = $(this.getDOMNode()).parent().width();
		var photoScale = width / this.props.photo.width;
		this.setState({ height: Math.round(this.props.photo.height * photoScale)});
	},

  render: function () {
    return (
      <li className="photo-item" style={this.composeStyle()} onClick={this.selectImage}>
   		<img src={this.props.photo.image.image.medium.url} style={{ height: this.state.height + 'px' }} />
      </li>
    );
  }
});

module.exports = PhotoItem; 


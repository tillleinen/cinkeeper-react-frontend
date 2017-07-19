'use strict';

var React = require('react/addons');

var BehindTheScenesItem = require('./BehindTheScenesItem.js');
var LoadingIcon = require('./LoadingIcon.js');

var Request = require('../utils/Request.js');
var Device = require('../utils/Device.js');

require('styles/BehindTheScenes.scss');

var $ = require('jquery');
var _ = require('underscore');
require('../utils/mousewheel.js');

var SCROLL_SPEED = 200;

var BehindTheScenes = React.createClass({

	getInitialState: function () {
		return {
			containerHeight: 0,
			photos: []
		};
	},

	componentWillMount: function () {
		$(window).on('resize', this.handleResize);
		$(window).on('mousewheel', this.mapScrolling);
	},

	componentWillUnmount: function () {
		$(window).off('resize', this.handleResize);
		$(window).off('mousewheel', this.mapScrolling);
	},

	componentDidMount: function() {
		this.fetchData();
	},

	mapScrolling: function (event) {
		if(!this.isTablet()){
			event.preventDefault();
			var verticalScroll = event.deltaY;
			var horizontalScroll = event.deltaX;
			this.scrollHorizontal(verticalScroll, horizontalScroll);
		}
	},

	scrollHorizontal: function (verticalScroll, horizontalScroll) {
		var scroll = $(window).scrollLeft();
		$(window).scrollLeft(scroll - (verticalScroll - horizontalScroll));
	},

  scrollAnimatedRight: function () {
    this.scrollAnimatedHorizontal($(window).width() * 0.6);
  },

  scrollAnimatedLeft: function () {
    this.scrollAnimatedHorizontal($(window).width() * -0.6);
  },

  scrollAnimatedHorizontal: function (scrollDistance) {
    var scroll = $(window).scrollLeft();

    $('html, body').animate({
      scrollLeft: scroll + scrollDistance
    }, SCROLL_SPEED);
  },

	fetchData: function () {
		Request
			.get('/behind_the_scenes_photos')
			.end(this.handleResponse);
	},

	handleResponse: function (err, res) {
		if(err) {
			console.log(err);
		} else if(this.isMounted()) {
			var photos = JSON.parse(res.text).behind_the_scenes_photos;
			this.setState({
				photos: photos
			});
			this.handleResize();
		}
	},

	handleResize: function () {
		this.setState({
			containerHeight: this.getHeight()
		});
	},

  calcTotalPhotoWidth: function () {
  	if(this.isTablet()) {
  		return $(window).width();
  	}
    return _.reduce(this.state.photos, function (sum, photo) {
      return sum + this.calcPhotoWidth(photo);
    }.bind(this), 0);
  },

  calcPhotoWidth: function (photo) {
  	if(this.isTablet()) {
  		return $(window).width();
  	}
    var availableHeight = this.getHeight();
    var photoScale = availableHeight / photo.height;
    return Math.round(photo.width * photoScale);
  },

  calcPhotoHeight: function (photo) {
  	if(this.isTablet()) {
  		var availableWidth = $('body').width();
  		var photoScale = availableWidth / photo.width;
  		return Math.round(photo.height * photoScale);
  	}
    var availableHeight = this.getHeight();
    return availableHeight;
  },

  getHeight: function () {
  	var bodyHeight = $(window).height();
    var headerHeight = $('header').outerHeight();
  	var footerHeight = $('footer').outerHeight();
  	return this.calcAvailableHeight(bodyHeight, headerHeight, footerHeight);
  },

  calcAvailableHeight: function (bodyHeight, headerHeight, footerHeight) {
      return bodyHeight - (headerHeight + footerHeight);
  },

  isTablet: function () {
    return !Device.isDesktop();
  },

  render: function () {
  	var content = <LoadingIcon/>;
  	if(this.state.photos.length > 0) {
  		content = <ul className="behindthescenes-photo-list" style={{ 'width': this.calcTotalPhotoWidth() + 'px' }} onClick={this.scrollHorizontalAnimated}>
      		{
      			this.state.photos.map(function (photo) {
      				return <BehindTheScenesItem key={photo.id} image={photo.image.image} width={this.calcPhotoWidth(photo)} height={this.calcPhotoHeight(photo)} />;
      			}.bind(this))
      		}
      	</ul>;
  	}

    return (
      <div className="behindthescenes-gallery">
        <div className="behindthescenes-gallery__nav behindthescenes-gallery__nav--left" onClick={this.scrollAnimatedLeft}>
          <div className="behindthescenes-gallery__nav__icon" />
        </div>
        <div className="behindthescenes-gallery__nav behindthescenes-gallery__nav--right" onClick={this.scrollAnimatedRight}>
          <div className="behindthescenes-gallery__nav__icon" />
        </div>
      	{content}
      </div>
    );
  }
});

module.exports = BehindTheScenes;


"use strict";

var DeviceConstants = require('../constants/DeviceConstants.js');
var $ = require('jquery');

var TABLET_BREAKPOINT = 768;
var MOBILE_BREAKPOINT = 480;

module.exports = window.device = {
	detect: function (argument) {
	    var width = $(window).innerWidth();
	    
	    if (width <= TABLET_BREAKPOINT) {
	      if(width <= MOBILE_BREAKPOINT) {
	      	return DeviceConstants.MOBILE;
	      }
	      return DeviceConstants.TABLET;
	    }
	    return DeviceConstants.DESKTOP;
	},

	isMobile: function () {
		return this.detect() === DeviceConstants.MOBILE;
	},

	isTablet: function () {
		return this.detect() === DeviceConstants.TABLET;
	},

	isDesktop: function () {
		return this.detect() === DeviceConstants.DESKTOP;
	}
};

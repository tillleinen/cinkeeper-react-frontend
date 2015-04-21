"use strict";

var DeviceConstants = require('../constants/DeviceConstants.js');
var $ = require('jquery');

module.exports = {
	detect: function (argument) {
	    var width = $(window).innerWidth();
	    
	    if (width <= 768) {
	      if(width <= 480) {
	      	return DeviceConstants.MOBILE;
	      }
	      return DeviceConstants.TABLET;
	    }
	    return DeviceConstants.DESKTOP;
	}

};

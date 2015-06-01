'use strict';

var Device = require('./Device.js');
var DeviceConstants = require('../constants/DeviceConstants.js');

module.exports = function(desktop_img, tablet_img, mobile_img) {
    switch(Device.detect()) {
      case DeviceConstants.TABLET:
        return tablet_img;
      case DeviceConstants.MOBILE:
        return mobile_img;
    }
    return desktop_img;
};
'use strict';

var _ = require('underscore');
var React = require('react/addons');
var PhotoRow = require('./PhotoRow.js');
var photoData = require('./data/photos.js');
var $ = require('jquery');

var Device = require('../utils/Device.js');
var DeviceConstants = require('../constants/DeviceConstants.js');

require('styles/Photo.sass');

var Photo = React.createClass({
  getInitialState: function () {
    return {rows: []};
  },

  componentWillMount: function () {
    $(window).on('resize', this.calcRows).trigger('resize');
  },

  componentWillUnmount: function () {
    $(window).off('resize', this.calcRows);
  },
  
  calcRows: function () {
    var numRows;
    switch(Device.detect()) {
      case DeviceConstants.DESKTOP:
        numRows = 3;
        break;
      case DeviceConstants.TABLET:
        numRows = 2;
        break;
      case DeviceConstants.MOBILE:
        numRows = 1;
        break;
      default:
    }

    var rows = [];

    for (var i = 0; i < numRows; i++) {
      var length = photoData.length/numRows;
      var offset = i * length;
      rows.push(photoData.slice(offset, offset + length));
    }

    this.setState({rows: rows});
  },

  render: function () {
    var rows = this.state.rows;
    return (
    	<div className="photos">
        {
          rows.map(function (row) {
            return <PhotoRow numRows={rows.length} photos={row}/>;
          })
        }
	    </div>
    );
  }
});

module.exports = Photo; 


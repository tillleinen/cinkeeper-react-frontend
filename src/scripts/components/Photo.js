'use strict';

var _ = require('underscore');
var React = require('react/addons');
var PhotoRow = require('./PhotoRow.js');
var LoadingIcon = require('./LoadingIcon.js');
var $ = require('jquery');

var Device = require('../utils/Device.js');
var DeviceConstants = require('../constants/DeviceConstants.js');

var Request = require('../utils/Request.js');

require('styles/Photo.sass');

var Photo = React.createClass({
  getInitialState: function () {
    return {
      photos: []
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function () {
    Request
      .get('/photos')
      .end(this.handleResponse);
  },

  handleResponse: function (err, res) {
    if(err) {
      console.log(err);
    } else if(this.isMounted()) {
      var photos = JSON.parse(res.text).photos;
      this.setState({
        photos: photos
      });
    }
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
      var length = this.state.photos.length/numRows;
      var offset = i * length;
      rows.push(this.state.photos.slice(offset, offset + length));
    }

    return rows;
  },

  render: function () {
    var rows = this.calcRows();

    var content = <LoadingIcon />;

    if(this.state.photos.length > 0) {
      content = rows.map(function (row) {
        return <PhotoRow numRows={rows.length} photos={row}/>;
      });
    }

    return (
    	<div className="photos">
        { content }
	    </div>
    );
  }
});

module.exports = Photo; 


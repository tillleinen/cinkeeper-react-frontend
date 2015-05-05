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
      photos: [],
      rows: []
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
      this.calcRows();
    }
  },

  componentWillMount: function () {
    $(window).on('resize', this.calcRows).trigger('resize');
  },

  componentWillUnmount: function () {
    $(window).off('resize', this.calcRows);
  },
  
  calcRows: function () {
    var numRows = this.calcNumRows();
    var totalHeight = this.calcTotalPhotoHeight(numRows);

    var rows = _.times(numRows, function() { return []; });
    var heightOfProcessedPhotos = 0;
    for (var i = 0; i < this.state.photos.length; i++) {
      var photo = this.state.photos[i];
      heightOfProcessedPhotos += this.calcPhotoHeight(photo);

      var rowIndex = _.min([Math.floor((heightOfProcessedPhotos / totalHeight) * numRows), numRows - 1]);
      rows[rowIndex].push(photo);
    }

    this.setState({
      rows: rows
    });
  },

  calcNumRows: function () {
    switch(Device.detect()) {
      case DeviceConstants.DESKTOP:
        return 3;
      case DeviceConstants.TABLET:
        return 2;
      case DeviceConstants.MOBILE:
        return 1;
    }
  },

  calcTotalPhotoHeight: function (numRows) {
    return _.reduce(this.state.photos, function (sum, photo) {
      return sum + this.calcPhotoHeight(photo);
    }.bind(this), 0);
  },

  calcPhotoHeight: function (photo) {
    var availableWidth = $(window).width() / this.calcNumRows();
    var photoScale = availableWidth / photo.width;
    return photo.height * photoScale;
  },

  render: function () {
    var rows = this.state.rows;

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


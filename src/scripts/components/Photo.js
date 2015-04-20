'use strict';

var _ = require('underscore');
var React = require('react/addons');
var PhotoRow = require('./PhotoRow.js');
var photoData = require('./data/photos.js');

require('styles/Photo.sass');

var Photo = React.createClass({
  render: function () {
  	var firstRow = photoData.slice(0, photoData.length/3);
  	var secondRow = photoData.slice(photoData.length/3, 2*photoData.length/3);
  	var thirdRow = photoData.slice(2*photoData.length/3, photoData.length);

    return (
    	<div className="photos">
    		<PhotoRow photos={firstRow}/>
    		<PhotoRow photos={secondRow}/>
    		<PhotoRow photos={thirdRow}/>
	    </div>
      );
  }
});

module.exports = Photo; 


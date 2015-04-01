'use strict';

var React = require('react/addons');
var PhotoItem = require('./PhotoItem.js');

require('styles/Photo.sass');

var Photo = React.createClass({
  render: function () {
    return (
    	<div className="photos">
	        <ul className="photo-list">
	          <PhotoItem imageSrc="../images/photos/DSC_0273.JPG" />
	          <PhotoItem imageSrc="../images/photos/DSC_0463.png" />
	          <PhotoItem imageSrc="../images/photos/Filmspur P Malta Background.jpg" />
	        </ul>
	        <ul className="photo-list">
	          <PhotoItem imageSrc="../images/photos/IMG_1413.jpg" />
	          <PhotoItem imageSrc="../images/photos/IMG_1771.jpg" />
	          <PhotoItem imageSrc="../images/photos/IMG_7025.jpg" />
	          <PhotoItem imageSrc="../images/photos/IMG_7697.jpg" />
	        </ul>
	        <ul className="photo-list">
	          <PhotoItem imageSrc="../images/photos/IMG_8384.jpg" />
	          <PhotoItem imageSrc="../images/photos/Sonnenuntergang_Kroatien.png" />
	          <PhotoItem imageSrc="../images/photos/IMG_7531 (3).png" />
	          <PhotoItem imageSrc="../images/photos/Hunde-9977(3).png" />
	          <PhotoItem imageSrc="../images/photos/IMG_0768.png" />
	        </ul>
	    </div>
      );
  }
});

module.exports = Photo; 


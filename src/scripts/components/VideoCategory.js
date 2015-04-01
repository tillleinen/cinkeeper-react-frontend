'use strict';

var React = require('react/addons');

require('styles/VideoCategory.sass');

var VideoCategory = React.createClass({
  render: function () {
  	var imageStyle = {
  		backgroundImage: 'url(' + this.props.imageSrc + ')'
  	};

    return (
        <li className="video-category">
        	<a href="/videos/:item">
	        	<div className="video-category__image" style={imageStyle}></div>
	        	<div className="video-category__overlay">
	        		<div className="video-category__overlay__caption">{this.props.name}</div>
	        	</div>
	        </a>
        </li>
      );
  }
});

module.exports = VideoCategory; 


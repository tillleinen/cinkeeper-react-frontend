'use strict';

var React = require('react/addons');

require('styles/VideoItem.sass');

var VideoItem = React.createClass({
  render: function () {
  	var imageStyle = {
  		backgroundImage: 'url(' + this.props.imageSrc + ')'
  	};

    return (
		<li className="video-item">
			<a href="test">
				<div className="video-item__image" style={imageStyle}></div>
				<div className="video-item__overlay">
					<div className="video-item__overlay__caption">
						{this.props.caption}
					</div>
				</div>
			</a>
		</li>
      );
  }
});

module.exports = VideoItem; 


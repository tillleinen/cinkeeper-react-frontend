'use strict';

var React = require('react/addons');

require('styles/VideoItem.sass');

var VideoItem = React.createClass({
  render: function () {
    return (
		<li className="video-item">
			<img className="video-item__image" src={this.props.imageSrc}></img>
			<div className="video-item__caption">
			</div>
		</li>
      );
  }
});

module.exports = VideoItem; 


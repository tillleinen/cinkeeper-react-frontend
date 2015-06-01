'use strict';

var React = require('react/addons');

require('styles/BehindTheScenesItem.sass');
var ResponsiveImage = require('../utils/ResponsiveImage');

var BehindTheScenesItem = React.createClass({
	composeStyle: function () {
		return { 
			'background-image': 'url(' + this.getImageURL() + ')',
			'width': this.props.width + 'px',
			'height': this.props.height + 'px'
		};
	},

  getImageURL: function () {
    return ResponsiveImage(
      this.props.image.large.url,
      this.props.image.medium.url,
      this.props.image.small.url
    );
  },

  render: function () {
    return (
      <li className="behindthescenes-photo-list__item" style={this.composeStyle()}>
      </li>
    );
  }
});

module.exports = BehindTheScenesItem; 


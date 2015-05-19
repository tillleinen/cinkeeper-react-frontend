'use strict';

var React = require('react/addons');

require('styles/BehindTheScenesItem.sass');

var BehindTheScenesItem = React.createClass({
	composeStyle: function () {
		return { 
			'background-image': 'url(' + this.props.imageSrc + ')',
			'width': this.props.width + 'px',
			'height': this.props.height + 'px'
		};
	},

  render: function () {
    return (
      <li className="behindthescenes-photo-list__item" style={this.composeStyle()}>
      </li>
    );
  }
});

module.exports = BehindTheScenesItem; 


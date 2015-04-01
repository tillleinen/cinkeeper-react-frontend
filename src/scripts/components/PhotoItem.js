'use strict';

var React = require('react/addons');

require('styles/PhotoItem.sass');

var PhotoItem = React.createClass({
  render: function () {
    return (
      <li className="photo-item">
      	<a href="/photo/:item">
      		<img src={this.props.imageSrc} />
      	</a>
      </li>
    );
  }
});

module.exports = PhotoItem; 


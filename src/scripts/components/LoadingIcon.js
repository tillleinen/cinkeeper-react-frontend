'use strict';

var React = require('react/addons');

require('styles/LoadingIcon.sass');

var LoadingIcon = React.createClass({
  render: function () {
    return (
        <div className="loading-icon">
          <img className="loading-icon__image" src="../../images/loading_icon.png" />
        </div>
      );
  }
});

module.exports = LoadingIcon; 


'use strict';

var React = require('react/addons');

require('styles/Clients.sass');

var Clients = React.createClass({
  render: function () {
    return (
        <div className="clients">
        	<div className="clients__bg-image"></div>
        	<div className="clients-overlay">
	        	<h1 className="clients-overlay__headline">Clients</h1>
	        	<ul className="clients-list">
	        		<li className="clients-list__item" style={{'background-image': 'url(../../images/jwlry.png)'}}></li>
	        		<li className="clients-list__item" style={{'background-image': 'url(../../images/berolina.png)'}}></li>
	        		<li className="clients-list__item" style={{'background-image': 'url(../../images/emp.png)'}}></li>
	        		<li className="clients-list__item" style={{'background-image': 'url(../../images/jussi.png)'}}></li>
	        		<li className="clients-list__item" style={{'background-image': 'url(../../images/favry.png)'}}></li>
	        		<li className="clients-list__item" style={{'background-image': 'url(../../images/fuchsteufelswild-laurel-leaves-logo.png)'}}></li>
	        	</ul>
        	</div>
        </div>
      );
  }
});

module.exports = Clients; 


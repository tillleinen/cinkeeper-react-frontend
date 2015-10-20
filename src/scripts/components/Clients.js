'use strict';

var React = require('react/addons');

var LoadingIcon = require('./LoadingIcon.js');

var Request = require('../utils/Request.js');

require('styles/Clients.sass');

var Clients = React.createClass({
	getInitialState: function () {
		return {
			clients: []
		};
	},

	componentDidMount: function() {
		this.fetchData();
	},

	fetchData: function () {
		Request
			.get('/clients')
			.end(this.handleResponse);
	},

	handleResponse: function (err, res) {
		if(err) {
			console.log(err);
		} else if(this.isMounted()) {
			var clients = JSON.parse(res.text).clients;
			this.setState({
				clients: clients
			});
		}
	},

  render: function () {
  	
  	var content = <LoadingIcon/>;
  	if(this.state.clients.length > 0) {
  		content = 
        	<div className="clients-overlay">
	        	<h1 className="clients-overlay__headline">Clients</h1>
	  			<ul className="clients-list">
	        		{
	        			this.state.clients.map(function (client) {
	        				return <a href={client.url} target="_blank" className="clients-list__item" style={{'background-image': 'url(' + client.image.image.small.url + ')' }}></a>;
	        			}.bind(this))
	        		}
	        	</ul>
        	</div>;
  	}

    return (
        <div className="clients-container">
        	<div className="clients__bg-image"></div>
	        {content}
        </div>
      );
  }
});

module.exports = Clients; 


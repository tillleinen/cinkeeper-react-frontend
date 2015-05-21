'use strict';

var React = require('react/addons');
var Request = require('../utils/Request.js');

require('styles/Home.sass');

var Home = React.createClass({
	getInitialState: function () {
		return {
			background_images: []
		};
	},

	componentDidMount: function() {
		this.fetchData();
	},

	fetchData: function () {
		Request
			.get('/background_images')
			.end(this.handleResponse);
	},

	handleResponse: function (err, res) {
		if(err) {
			console.log(err);
		} else if(this.isMounted()) {
			var background_images = JSON.parse(res.text).background_images;
			this.setState({
				background_images: background_images
			});
		}
	},

	composeStyle: function () {
		if (this.state.background_images.length === 0) {
			return {};
		}
		return {
			'background-image': 'url(' + this.state.background_images[0].image.image.medium.url + ')'
		};
	},

  render: function () {
    return (
	  <div className="home" style={this.composeStyle()}>
	  </div>
	);
  }
});

module.exports = Home; 


'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var Request = require('../utils/Request.js');

require('styles/Film.sass');

var Film = React.createClass({
	getInitialState: function () {
		return {
			videoCategories: []
		};
	},

	componentDidMount: function() {
		this.fetchData();
	},

	fetchData: function () {
		Request
			.get('/video_categories')
			.end(this.handleResponse);
	},

	handleResponse: function (err, res) {
		if(err) {
			console.log(err);
		} else if(this.isMounted()) {
			var videoCategories = JSON.parse(res.text).video_categories;
			this.setState({
				videoCategories: videoCategories
			});
		}
	},


    render: function () {
        return (
            <div className="film">
                <RouteHandler videoCategories={this.state.videoCategories} />
            </div>
        );
    }
});

module.exports = Film; 


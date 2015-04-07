'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

require('styles/Film.sass');

var Film = React.createClass({
	statics: {
	  willTransitionTo: function (transition, params, query, callback) {
	      console.log("to film");
	      // console.log(params, query);
	      callback();
	  },

	  willTransitionFrom: function (transition, component, callback) {
	      console.log("from film");
	      // console.log(transition);
	      // console.log(component);
	      callback();
	  },
	},

    render: function () {
        return (
            <div className="film">
                <RouteHandler />
            </div>
        );
    }
});

module.exports = Film; 


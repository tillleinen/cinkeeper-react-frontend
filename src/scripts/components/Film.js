'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var videoCategoryData = require('./data/video-categories.js');

require('styles/Film.sass');

var Film = React.createClass({
    render: function () {
        return (
            <div className="film">
                <RouteHandler videoCategories={videoCategoryData} />
            </div>
        );
    }
});

module.exports = Film; 


'use strict';

var Cinekeeper = require('./Cinekeeper.js');
var Home = require('./Home.js');
var Film = require('./Film.js');
var Photo = require('./Photo.js');
var About = require('./About.js');
var VideoCategories = require('./VideoCategories.js');
var Videos = require('./Videos.js');
var VideoPlayer = require('./VideoPlayer.js');

var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var content = document.getElementById('content');

var Routes = (
    <Route handler={Cinekeeper} path="/">
        <DefaultRoute name="home" handler={Home} />
        <Route name="film" handler={Film}>
            <Route name="category" path=":categorySlug" handler={Videos} />
            <Route name="video" path=":categorySlug/:vimeoId" handler={VideoPlayer} />
        </Route>
        <Route name="photo" path="/foto" handler={Photo} />
        <Route name="about" handler={About} />
    </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, content);
});

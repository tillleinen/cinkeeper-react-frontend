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

var app = document.getElementById('app');

var Routes = (
    <Route handler={Cinekeeper} path="/">
        <DefaultRoute name="home" handler={Home} />
        <Route name="film" handler={Film}>
            <Route name="categories" path="/film" handler={VideoCategories}>
                <Route name="category" path=":categorySlug" handler={Videos}>
                    <Route name="video" path=":videoSlug" handler={VideoPlayer} />
                </Route>
            </Route>
        </Route>
        <Route name="photo" path="/foto" handler={Photo} />
        <Route name="about" handler={About} />
    </Route>
);

Router.run(Routes, function (Handler) {
    React.render(<Handler/>, app);
});

var fastclick = require('fastclick');
fastclick.attach(document.body);

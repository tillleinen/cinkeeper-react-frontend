'use strict';

var Cinekeeper = require('./Cinekeeper.js');
var Home = require('./Home.js');
var Film = require('./Film.js');
var Photo = require('./Photo.js');
var About = require('./About.js');

var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var content = document.getElementById('content');

var Routes = (
  <Route handler={Cinekeeper} path="/">
  	<DefaultRoute handler={Home} />
    <Route name="film" handler={Film} />
    <Route name="photo" path="/foto" handler={Photo} />
    <Route name="about" handler={About} />
  </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, content);
});

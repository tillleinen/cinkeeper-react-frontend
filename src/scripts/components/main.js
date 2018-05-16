'use strict';

var Cinekeeper = require('./Cinekeeper.js');
var Home = require('./Home.js');
var Film = require('./Film.js');
var Photo = require('./Photo.js');
var About = require('./About.js');
var VideoCategories = require('./VideoCategories.js');
var Videos = require('./Videos.js');
var VideoPlayer = require('./VideoPlayer.js');
var Clients = require('./Clients.js');
var BehindTheScenes = require('./BehindTheScenes.js');
var Contact = require('./Contact.js');
var Imprint = require('./Imprint.js');
var We = require('./We.js');

var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute } = Router;

var app = document.getElementById('app');

var triggerPageview = function () {
  ga('send', 'pageview', location.hash.substr(1));
};

var Routes = (
  <Route handler={Cinekeeper} path='/'>
    <DefaultRoute name='home' handler={Home} />
    <Route name='film' handler={Film}>
      <Route name='categories' path='/film' handler={VideoCategories}>
        <Route name='category' path=':categorySlug' handler={Videos}>
          <Route name='video' path=':videoSlug' handler={VideoPlayer} />
        </Route>
      </Route>
    </Route>
    <Route name='photo' path='photo' handler={Photo} />
    <Route name='about' handler={About} />
    <Route name='clients' path='about/clients' handler={Clients} />
    <Route name='behindthescenes' path='about/behindthescenes' handler={BehindTheScenes} />
    <Route name='contact' path='about/contact' handler={Contact} />
    <Route name='we' path='about/we' handler={We} />
    <Route name='imprint' path='about/imprint' handler={Imprint} />
  </Route>
);

Router.run(Routes, function (Handler) {
  triggerPageview();
  React.render(<Handler />, app);
});

var fastclick = require('fastclick');
fastclick.attach(document.body);

var HorizontalScrollbarResizeDetector = require('../utils/HorizontalScrollbarResizeDetector.js');
document.body.appendChild(HorizontalScrollbarResizeDetector);

var VerticalScrollbarResizeDetector = require('../utils/VerticalScrollbarResizeDetector.js');
document.body.appendChild(VerticalScrollbarResizeDetector);

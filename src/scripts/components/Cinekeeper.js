'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var Header = require('./Header.js');
var Footer = require('./Footer.js');

var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var $ = require('jquery');

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var Cinekeeper = React.createClass({
  getInitialState: function () {
    return {
      height: 0
    };
  },

  componentDidMount: function () {
      $(window).on('resize', this.setContentHeight).trigger('resize');
  },

  componentWillUnmount: function () {
      $(window).off("resize", this.setContentHeight);
  },

  setContentHeight: function() {
      var bodyHeight = $(window).height();
      console.log(bodyHeight);
      var headerHeight = $('header').outerHeight();
      var footerHeight = $('footer').outerHeight();
      var height = this.calcAvailableHeight(bodyHeight, headerHeight, footerHeight);
      console.log(height);
      this.setState({height: height});
  },

  calcAvailableHeight: function (bodyHeight, headerHeight, footerHeight) {
      return bodyHeight - (headerHeight + footerHeight);
  },

  render: function() {
    return (
      <div className="container">
        <Header />
        <Link className="logo" to="home">
          Cinekeeper
        </Link>
        <div className="content" style={{'height': this.state.height + 'px'}}>
          <RouteHandler/>
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Cinekeeper;

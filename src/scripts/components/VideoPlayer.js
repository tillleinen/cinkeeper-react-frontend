'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var $ = require('jquery');

require('styles/VideoPlayer.sass');

var VideoPlayer = React.createClass({
    statics: {
      willTransitionTo: function () {
          console.log("video player");
      },        
    },

    contextTypes: {
        router: React.PropTypes.func
    },

    componentWillMount: function () {
        $(window).on('resize', this.setIframeHeight).trigger('resize');
    },

    componentWillUnmount: function () {
        $(window).off("resize", this.setIframeHeight);
    },

    render: function () {
        var params = this.context.router.getCurrentParams();
        var videoSrc = '//player.vimeo.com/video/' + params.vimeoId + '?byline=0&title=0&portrait=0';

        var iframeHeight = this.state.iframeHeight + 'px';
        return (
            <div className="video-player" ref="videoPlayer">
                <iframe className="video-player__iframe" src={videoSrc} width="100%" height={iframeHeight} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
        );
    },

    setIframeHeight: function() {
        var bodyHeight = $(window).innerHeight();
        var headerHeight = $('header').outerHeight();
        var footerHeight = $('footer').outerHeight();
        var height = this.calcAvailableHeight(bodyHeight, headerHeight, footerHeight);
        this.setState({iframeHeight: height});
    },

    calcAvailableHeight: function (bodyHeight, headerHeight, footerHeight) {
        return bodyHeight - (headerHeight + footerHeight);
    }
});

module.exports = VideoPlayer; 


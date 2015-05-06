'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var $ = require('jquery');
var _ = require('underscore');

require('styles/VideoPlayer.sass');

var LoadingIcon = require('./LoadingIcon.js');

var IDLE_TIMEOUT = 2000;

var VideoPlayer = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    statics: {
        willTransitionFrom: function (transition, component, callback) {
          VideoPlayer.waitForRouteTransitionEnd(component, callback);
          $(component.getDOMNode()).removeClass('is-showing');
          $('body').removeClass('is-fixed');
        },

        waitForRouteTransitionEnd: function (component, callback) {
          $(component.getDOMNode())
            .one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
              e.stopPropagation();
              callback();
          });
        }
    },

    componentDidMount: function () {
        setTimeout(function () {
            $(this.getDOMNode()).addClass('is-showing');
            $('body').addClass('is-fixed');
        }.bind(this));
        this.startIdleTimeout();
    },

    componentWillMount: function () {
        $(window).on('resize', this.setIframeHeight).trigger('resize');
    },

    componentWillUnmount: function () {
        $(window).off("resize", this.setIframeHeight);
        this.stopIdleTimeout();
    },

    startIdleTimeout: function () {
        $(this.getDOMNode()).on('mousemove', this.resetTimeout);
        this.resetTimeout();
    },

    stopIdleTimeout: function () {
        $(this.getDOMNode()).on('mousemove', this.resetTimeout);
        clearTimeout(this.idleTimeout);
    },

    resetTimeout: function () {
        $(this.getDOMNode()).find('.video-player__btn-close').removeClass('is-idle');
        clearTimeout(this.idleTimeout);
        this.idleTimeout = setTimeout(this.hideCloseButton, IDLE_TIMEOUT);
    },

    hideCloseButton: function () {
        $(this.getDOMNode()).find('.video-player__btn-close').addClass('is-idle');
    },

    render: function () {
        var vimeoId = this.getVimeoId();
        var params = this.context.router.getCurrentParams();
        var videoSrc = '//player.vimeo.com/video/' + vimeoId + '?byline=0&title=0&portrait=0&wmode=transparent';

        var iframeHeight = this.state.iframeHeight + 'px';
        return (
            <div className="video-player" style={{height: iframeHeight}} ref="videoPlayer">
                <LoadingIcon />
                <iframe className="video-player__iframe" src={videoSrc} width="100%" height={iframeHeight} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen wmode="transparent"></iframe>
                <Link className="video-player__btn-close btn-close" to="category" params={{categorySlug: params.categorySlug}}>Close</Link>
            </div>
        );
    },

    getVimeoId: function () {
        var params = this.context.router.getCurrentParams();
        var video = _.find(this.props.videos, function (video) {
            return params.videoSlug === video.slug;
        });
        return video.vimeo_id;
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


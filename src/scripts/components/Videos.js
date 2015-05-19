'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link, Navigation } = Router;

var VideoItem = require('./VideoItem.js');
var VideoCategoryItem = require('./VideoCategoryItem.js');

var $ = require('jquery');
var _ = require('underscore');

require('styles/Videos.sass');

var Videos = React.createClass({
    mixins: [Navigation],

    componentWillMount: function () {
        var playInstantly = this.getCategory().play_instantly;
        if (playInstantly) {
            this.redirectToFirstVideo();
        }
    },

    redirectToFirstVideo: function () {
        var category = this.getCategory();
        var firstVideo = category.videos[0];
        if (firstVideo) {
            this.transitionTo('video', {categorySlug: this.getCategory().slug, videoSlug: firstVideo.slug});
        }
    },

    contextTypes: {
        router: React.PropTypes.func
    },

    statics: {
        willTransitionFrom: function (transition, component, callback) {
          $(component.getDOMNode()).find('.video-item').removeClass('is-showing');
          Videos.waitForRouteTransitionEnd(component, callback);
        },

        waitForRouteTransitionEnd: function (component, callback) {
            var video_items = $(component.getDOMNode()).find('.video-item');
            if(video_items.length > 0) {
              video_items
                .one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
                  e.stopPropagation();
                  callback();
              });
            } else {
                callback();
            }
        }
    },

    render: function () {
        var category = this.getCategory();
        return (
            <div className="videos">
                <ul className="video-list">
                    {
                        category.videos.map(function (video, index) {
                            return <VideoItem key={video.id} video={video} />;
                        })
                    }
                </ul>
                <RouteHandler videos={category.videos}/>
            </div>
        );
    },

    getCategory: function () {
        var params = this.context.router.getCurrentParams();
        var category = _.find(this.props.videoCategories, function(category) {
            return category.slug === params.categorySlug;
        });
        return category;
    }
});

module.exports = Videos; 

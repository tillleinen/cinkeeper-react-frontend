'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var VideoItem = require('./VideoItem.js');
var VideoCategoryItem = require('./VideoCategoryItem.js');

var $ = require('jquery');
var _ = require('underscore');

require('styles/Videos.sass');

var Videos = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    statics: {
        willTransitionFrom: function (transition, component, callback) {
          $(component.getDOMNode()).find('.video-item').removeClass('is-showing');
          Videos.waitForRouteTransitionEnd(component, callback);
        },

        waitForRouteTransitionEnd: function (component, callback) {
          $(component.getDOMNode()).find('.video-item')
            .one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
              e.stopPropagation();
              callback();
          });
        }
    },

    render: function () {
        var params = this.context.router.getCurrentParams();
        var category = _.find(this.props.videoCategories, function(category) {
            return category.slug === params.categorySlug;
        });

        return (
            <div className="videos">
                <ul className="video-list">
                    {
                        category.videos.map(function (video, index) {
                            return <VideoItem key={video.id} vimeoId={video.vimeo_id} imageSrc={video.imageSrc} caption={video.name} />;
                        })
                    }
                </ul>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = Videos; 

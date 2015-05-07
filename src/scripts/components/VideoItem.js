'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var $ = require('jquery');
require('styles/VideoItem.sass');

var VideoItem = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    componentDidMount: function () {
        setTimeout(function () {
            $(this.getDOMNode()).addClass('is-showing');
        }.bind(this));
    },

    composeStyle: function () {
        return {
            backgroundImage: 'url(' + this.props.video.image.image.medium.url + ')'
        };
    },

    render: function () {
        var params = this.context.router.getCurrentParams();
        return (
            <li className="video-item">
                <Link to="video" params={{videoSlug: this.props.video.slug, categorySlug: params.categorySlug}}>
                    <div className="video-item__image" style={this.composeStyle()}></div>
                    <div className="video-item__overlay">
                        <div className="video-item__overlay__caption">
                            {this.props.video.name}
                        </div>
                    </div>
                </Link>
            </li>
          );
      }
});

module.exports = VideoItem; 


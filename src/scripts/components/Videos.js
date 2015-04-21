'use strict';

var React = require('react/addons');
var VideoItem = require('./VideoItem.js');
var VideoCategoryItem = require('./VideoCategoryItem.js');
var videoCategoryData = require('./data/video-categories.js');

var _ = require('underscore');

require('styles/Videos.sass');

var Videos = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },

    render: function () {
        var params = this.context.router.getCurrentParams();
        var category = _.find(videoCategoryData, function(category) {
            return category.slug === params.categorySlug;
        });

        return (
            <div className="videos">
                <ul className="video-category-list">
                    <VideoCategoryItem selectedCategory={category.slug} data={category} onClick={this.transitionToCategories} isClosable={true} />
                </ul>
                <ul className="video-list">
                    {
                        category.videos.map(function (video) {
                            return <VideoItem vimeoId={video.id} imageSrc={video.image.image.url} caption={video.name} />;
                        })
                    }
                </ul>
            </div>
        );
    }
});

module.exports = Videos; 

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
                    <VideoItem vimeoId="107468450" imageSrc="../../images/video1.jpg" caption="Mortis x Making Of x Hollywoodpsychose x 2014" />
                    <VideoItem vimeoId="113510208" imageSrc="../../images/video5.jpg" caption="JD Collection 2014 x THREE" />
                    <VideoItem vimeoId="116354206" imageSrc="../../images/video3.jpg" caption="Klangpoet x 4U x Wildcard Contest ESC 2015" />
                    <VideoItem vimeoId="114948026" imageSrc="../../images/video4.jpg" caption="Fuchsteufelswild x PARADIGMA x Teaser I" />
                    <VideoItem vimeoId="110206885" imageSrc="../../images/video6.jpg" caption="FAVRY x PRAY x 2014" />
                    <VideoItem vimeoId="113278713" imageSrc="../../images/video7.jpg" caption="THE WORLD IS YOURS x 99FFA x 2015 x TOP99" />
                    <VideoItem vimeoId="121350228" imageSrc="../../images/video2.jpg" caption="CINEKEEPER x SHOWREEL x 2015" />
                </ul>
            </div>
        );
    }
});

module.exports = Videos; 

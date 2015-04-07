'use strict';

var React = require('react/addons');
var $ = require('jquery');
var VideoCategoryItem = require('./VideoCategoryItem.js');

require('styles/VideoCategories.sass');

var VideoCategories = React.createClass({
  statics: {
    willTransitionFrom: function (transition, component, callback) {
      var isRoutingToVideos = transition.path.match(/^\/film\/[a-z0-9_-]+$/);
      if(isRoutingToVideos) {
        VideoCategories.waitForRouteTransitionEnd(component, callback);
      } else {
        callback();
      }
    },

    waitForRouteTransitionEnd: function (component, callback) {
      $(component.getDOMNode()).children('li').first()
        .one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function (e) {
          e.stopPropagation();
          callback();
      });
    }
  },

  getInitialState: function () {
    return {selectedCategory: this.props.selectedCategory};
  },

  selectCategory: function (event) {
    this.setState({selectedCategory: $(event.target).closest('.video-category').attr('id')});
  },

  resetSelection: function () {
    this.setState({selectedCategory: null});
  },

  render: function () {
    var classString = 'video-category-list';
    if(this.state.selectedCategory) {
      classString += ' hasSelectedCategory';
    }

    return (
        <ul className={classString}> 
          <VideoCategoryItem selectedCategory={this.state.selectedCategory} name="Music" slug="music" imageSrc="../../images/video1.jpg" onClick={this.selectCategory}/>
          <VideoCategoryItem selectedCategory={this.state.selectedCategory} name="Lifestyle" slug="lifestyle" imageSrc="../../images/video2.jpg" onClick={this.selectCategory} />
          <VideoCategoryItem selectedCategory={this.state.selectedCategory} name="Shortfilm" slug="shortfilm" imageSrc="../../images/video3.jpg" onClick={this.selectCategory} />
          <VideoCategoryItem selectedCategory={this.state.selectedCategory} name="Fashion" slug="fashion" imageSrc="../../images/video4.jpg" onClick={this.selectCategory} />
        </ul>
      );
  }
});

module.exports = VideoCategories;

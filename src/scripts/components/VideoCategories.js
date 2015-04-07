'use strict';

var React = require('react/addons');
var $ = require('jquery');
var VideoCategoryItem = require('./VideoCategoryItem.js');
var videoCategoryData = require('./data/video-categories.js');

require('styles/VideoCategories.sass');

var VideoCategories = React.createClass({
  statics: {
    willTransitionTo: function (transition, params, query, callback) {
      console.log(transition);
      console.log(params);
      console.log(query);
      callback();
    },

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

    var _this = this;
    return (
      <ul className={classString}>
        {
          videoCategoryData.map(function(category) {
            return <VideoCategoryItem key={category.slug} selectedCategory={_this.state.selectedCategory} data={category} onClick={_this.selectCategory}/>;
          })
        }
      </ul>
    );
  }
});

module.exports = VideoCategories;

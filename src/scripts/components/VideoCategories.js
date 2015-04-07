'use strict';

var React = require('react/addons');
var $ = require('jquery');
var VideoCategoryItem = require('./VideoCategoryItem.js');

require('styles/VideoCategories.sass');

var VideoCategories = React.createClass({
  statics: {
    willTransitionTo: function (transition, params, query, callback) {
        console.log("to film");
        console.log(params, query);
        this.resetSelection();
        callback();
    },

    willTransitionFrom: function (transition, component, callback) {
        console.log("from film");
        console.log(transition);
        console.log(component);
        callback();
    },
  },

  getInitialState: function() {
    return {selectedCategory: null};
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

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var $ = require('jquery');
var _ = require('underscore');

var VideoCategoryItem = require('./VideoCategoryItem.js');

require('styles/VideoCategories.sass');

var VideoCategories = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  componentDidMount: function () {
    this.setCategoryHeight();
  },

  componentWillMount: function () {
    $(window).on('resize', this.setCategoryHeight);
  },

  componentWillUnmount: function () {
    $(window).off("resize", this.setCategoryHeight);
  },

  setCategoryHeight: function () {
    var categoryHeight = $(this.getDOMNode()).find('.video-category').height();
    this.setState({categoryHeight: categoryHeight});
  },

  composeClassString: function () {
    var params = this.context.router.getCurrentParams();
    var classString = 'video-category-list';
    if(params.categorySlug) {
      classString += ' hasSelectedCategory';
    }
    return classString;
  },

  composeStyle: function () {
    var numCategories = this.props.videoCategories.length;
    var min_height = this.hasSelectedCategory() ? this.state.categoryHeight : numCategories * this.state.categoryHeight;
    return {
      'height': min_height + 'px'
    };
  },

  hasSelectedCategory: function () {
    var params = this.context.router.getCurrentParams();
    return !!params.categorySlug;
  },

  render: function () {
    var params = this.context.router.getCurrentParams();

    var content;
    if(this.props.videoCategories) {
      content = (
        <div>
          <ul className={this.composeClassString()} style={this.composeStyle()}>
            {
              this.props.videoCategories.map(function(category, index) {
                var isSelected = (category.slug === params.categorySlug);
                return <VideoCategoryItem key={category.slug} hasSelectedCategory={this.hasSelectedCategory()} isSelected={isSelected} data={category} index={index} />;
              }, this)
            }
          </ul>
          <RouteHandler videoCategories={this.props.videoCategories}/>
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
});

module.exports = VideoCategories;

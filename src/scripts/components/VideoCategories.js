'use strict';

var React = require('react/addons');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var _ = require('underscore');

var $ = require('jquery');
var VideoCategoryItem = require('./VideoCategoryItem.js');

require('styles/VideoCategories.sass');

var VideoCategories = React.createClass({
  contextTypes: {
      router: React.PropTypes.func
  },

  composeClassString: function () {
    var params = this.context.router.getCurrentParams();
    var classString = 'video-category-list';
    if(params.categorySlug) {
      classString += ' hasSelectedCategory';
    }
    return classString;
  },

  render: function () {
    var params = this.context.router.getCurrentParams();
    var _this = this;

    var content;
    if(this.props.videoCategories) {
      content = (
        <div>
          <ul className={this.composeClassString()}>
            {
              _this.props.videoCategories.map(function(category) {
                var isSelected = (category.slug === params.categorySlug);
                return <VideoCategoryItem key={category.slug} isSelected={isSelected} data={category} onClick={_this.selectCategory}/>;
              })
            }
          </ul>
          <RouteHandler videoCategories={_this.props.videoCategories}/>
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

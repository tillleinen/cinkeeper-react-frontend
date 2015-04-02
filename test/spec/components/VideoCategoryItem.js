'use strict';

describe('VideoCategory', function () {
  var React = require('react/addons');
  var VideoCategory, component;

  beforeEach(function () {
    VideoCategory = require('components/VideoCategory.js');
    component = React.createElement(VideoCategory);
  });

  it('should create a new instance of VideoCategory', function () {
    expect(component).toBeDefined();
  });
});

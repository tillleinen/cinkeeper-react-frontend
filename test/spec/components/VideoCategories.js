'use strict';

describe('VideoCategories', function () {
  var React = require('react/addons');
  var VideoCategories, component;

  beforeEach(function () {
    VideoCategories = require('components/VideoCategories.js');
    component = React.createElement(VideoCategories);
  });

  it('should create a new instance of VideoCategories', function () {
    expect(component).toBeDefined();
  });
});

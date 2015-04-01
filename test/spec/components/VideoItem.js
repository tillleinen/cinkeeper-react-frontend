'use strict';

describe('VideoItem', function () {
  var React = require('react/addons');
  var VideoItem, component;

  beforeEach(function () {
    VideoItem = require('components/VideoItem.js');
    component = React.createElement(VideoItem);
  });

  it('should create a new instance of VideoItem', function () {
    expect(component).toBeDefined();
  });
});

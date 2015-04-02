'use strict';

describe('VideoPlayer', function () {
  var React = require('react/addons');
  var VideoPlayer, component;

  beforeEach(function () {
    VideoPlayer = require('components/VideoPlayer.js');
    component = React.createElement(VideoPlayer);
  });

  it('should create a new instance of VideoPlayer', function () {
    expect(component).toBeDefined();
  });
});

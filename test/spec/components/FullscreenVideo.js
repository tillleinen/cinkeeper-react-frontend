'use strict';

describe('FullscreenVideo', function () {
  var React = require('react/addons');
  var FullscreenVideo, component;

  beforeEach(function () {
    FullscreenVideo = require('components/FullscreenVideo.js');
    component = React.createElement(FullscreenVideo);
  });

  it('should create a new instance of FullscreenVideo', function () {
    expect(component).toBeDefined();
  });
});

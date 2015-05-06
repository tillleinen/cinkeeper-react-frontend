'use strict';

describe('BehindTheScenes', function () {
  var React = require('react/addons');
  var BehindTheScenes, component;

  beforeEach(function () {
    BehindTheScenes = require('components/BehindTheScenes.js');
    component = React.createElement(BehindTheScenes);
  });

  it('should create a new instance of BehindTheScenes', function () {
    expect(component).toBeDefined();
  });
});

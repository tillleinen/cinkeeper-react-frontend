'use strict';

describe('Videos', function () {
  var React = require('react/addons');
  var Videos, component;

  beforeEach(function () {
    Videos = require('components/Videos.js');
    component = React.createElement(Videos);
  });

  it('should create a new instance of Videos', function () {
    expect(component).toBeDefined();
  });
});

'use strict';

describe('BehindTheScenesItem', function () {
  var React = require('react/addons');
  var BehindTheScenesItem, component;

  beforeEach(function () {
    BehindTheScenesItem = require('components/BehindTheScenesItem.js');
    component = React.createElement(BehindTheScenesItem);
  });

  it('should create a new instance of BehindTheScenesItem', function () {
    expect(component).toBeDefined();
  });
});

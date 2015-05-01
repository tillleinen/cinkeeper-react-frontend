'use strict';

describe('LoadingIcon', function () {
  var React = require('react/addons');
  var LoadingIcon, component;

  beforeEach(function () {
    LoadingIcon = require('components/LoadingIcon.js');
    component = React.createElement(LoadingIcon);
  });

  it('should create a new instance of LoadingIcon', function () {
    expect(component).toBeDefined();
  });
});

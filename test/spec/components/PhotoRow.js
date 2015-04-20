'use strict';

describe('PhotoRow', function () {
  var React = require('react/addons');
  var PhotoRow, component;

  beforeEach(function () {
    PhotoRow = require('components/PhotoRow.js');
    component = React.createElement(PhotoRow);
  });

  it('should create a new instance of PhotoRow', function () {
    expect(component).toBeDefined();
  });
});

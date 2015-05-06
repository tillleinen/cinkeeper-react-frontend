'use strict';

describe('Contact', function () {
  var React = require('react/addons');
  var Contact, component;

  beforeEach(function () {
    Contact = require('components/Contact.js');
    component = React.createElement(Contact);
  });

  it('should create a new instance of Contact', function () {
    expect(component).toBeDefined();
  });
});

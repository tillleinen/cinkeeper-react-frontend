'use strict';

var React = require('react/addons');
var Router = require('react-router');

var {Link} = Router;

var SmartLink = React.createClass({
  render () {
    const {to, children, ...rest} = this.props;
    const toLocation = this.parseTo(to);
    const isInternal = this.isInternal(toLocation);

    if (isInternal) {
      return (<Link to={to} {...rest}>{children}</Link>);
    } else {
      return (<a href={to} target="_blank" {...rest}>{children}</a>);
    }
  },

  parseTo(to) {
    var parser = document.createElement('a');
    parser.href = to;
    return parser;
  },

  isInternal(toLocation) {
    return window.location.host === toLocation.host;
  }
});

module.exports = SmartLink;

'use strict';

var React = require('react/addons');
var PhotoItem = require('./PhotoItem.js');
var $ = require('jquery');

require('styles/PhotoRow.sass');

var PhotoRow = React.createClass({
  componentDidMount: function () {
    this.animationFrames = [];
    this.scrollInterval = setInterval(this.handleInterval, 1);
  },

  componentWillUnmount: function () {
    clearInterval(this.scrollInterval);
    for (var i = this.animationFrames.length - 1; i >= 0; i--) {
      window.cancelAnimationFrame(this.animationFrames[i]);
    }
  },

  handleInterval: function () {
    this.animationFrames.push(window.requestAnimationFrame(this.moveY));
  },

  moveY: function () {
    var rowNode = $(this.refs.row.getDOMNode());

    var sectionHeight = $(this.refs.row.getDOMNode()).parent().outerHeight();
    var rowHeight = rowNode.outerHeight();

    var diff = sectionHeight - rowHeight;
    var scrollDiff = $(document).height() - $(window).height();
    var scrollPercentage = $(window).scrollTop() / scrollDiff;

    var necessaryOffset = (diff * scrollPercentage).toFixed(2);

    rowNode.css('transform', 'translate3d(0,' + necessaryOffset + 'px,0)');    
  },

  render: function () {
    return (
        <ul className="photo-list" ref="row" style={{width: 100 / this.props.numRows + '%'}}>
          {
            this.props.photos.map(function (photo) {
              return  <PhotoItem key={photo.id} imageSrc={photo.image.image.url} />;
            })
          }
        </ul>
      );
  }
});

module.exports = PhotoRow; 


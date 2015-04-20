'use strict';

var React = require('react/addons');
var PhotoItem = require('./PhotoItem.js');
var $ = require('jquery');

require('styles/PhotoRow.sass');

var scrollInterval;

var PhotoRow = React.createClass({
  componentDidMount: function () {
    // $(document).on('scroll', this.handleScroll);
    scrollInterval = setInterval(this.handleScroll, 10);
  },

  componentWillUnmount: function () {
    // $(document).off('scroll', this.handleScroll);  
    clearInterval(scrollInterval);
  },

  handleScroll: function () {
    window.requestAnimationFrame(this.moveY);

    // console.log(scrollDiff);
    // console.log(scrollPercentage);
    // console.log(sectionHeight);
    // console.log(rowHeight);
  },

  moveY: function () {
    var rowNode = $(this.refs.row.getDOMNode());

    var sectionHeight = $(this.refs.row.getDOMNode()).parent().outerHeight();
    var rowHeight = rowNode.outerHeight();

    var diff = sectionHeight - rowHeight;
    var scrollDiff = $(document).height() - $(window).height();
    var scrollPercentage = $(window).scrollTop() / scrollDiff;

    var necessaryOffset = (diff * scrollPercentage).toFixed(2);

    console.log(rowNode);
    console.log(necessaryOffset);
    console.log("======");

    rowNode.css('transform', 'translate3d(0,' + necessaryOffset + 'px,0)');    
  },

  render: function () {
    return (
        <ul className="photo-list" ref="row">
          {
            this.props.photos.map(function (photo) {
              return  <PhotoItem imageSrc={photo.image.image.url} />;
            })
          }
        </ul>
      );
  }
});

module.exports = PhotoRow; 


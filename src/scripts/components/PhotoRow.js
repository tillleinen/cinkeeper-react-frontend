'use strict';

var React = require('react/addons');
var PhotoItem = require('./PhotoItem.js');
var $ = require('jquery');

require('styles/PhotoRow.sass');

var PhotoRow = React.createClass({
  getInitialState: function () {
    return {
      overlayLeft: 0
    }
  },

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

  composeStyle: function () {
    var style = {
      width: 100 / this.props.numRows + '%',
      zIndex: 0
    };

    if(this.props.hasZoomedImage) {
      style.zIndex = 100;
    }

    return style;
  },

  composeOverlayStyle: function () {
    return {
      width: $(window).width(),
      left:  (-this.props.index * 100) + '%'
    };
  },

  composeOverlayClassName: function () {
    var className = "photo-list__overlay";

    if(this.props.hasZoomedImage) {
      className += ' photo-list__overlay--shown';
    }

    return className;
  },

  cancelSelection: function () {
    this.props.onSelect(null);
  },

  render: function () {
    return (
        <ul className="photo-list" ref="row" style={this.composeStyle()}>
          <div className={this.composeOverlayClassName()} style={this.composeOverlayStyle()} onClick={this.cancelSelection} />
          {
            this.props.photos.map(function (photo) {
              var isZoomed = (photo.id === this.props.zoomedImageID);
              return  <PhotoItem key={photo.id} photo={photo} isZoomed={isZoomed} onSelect={this.props.onSelect} />;
            }.bind(this))
          }
        </ul>
      );
  }
});

module.exports = PhotoRow; 


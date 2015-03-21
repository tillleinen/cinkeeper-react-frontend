'use strict';

var React = require('react/addons');

require('styles/Film.sass');

var Film = React.createClass({
  render: function () {
    return (
      <div className="video-overview">
        <ul className="video-overview__list">
          <li className="video-item">
          <img className="video-item__image" src="../../images/video2.png"></img>
          <div className="video-item__caption">
            
          </div>
          </li>
          <li className="video-item">
          <img className="video-item__image" src="../../images/video3.png"></img>
          </li>
          <li className="video-item">
          <img className="video-item__image" src="../../images/video4.png"></img>
          </li>
          <li className="video-item">
          <img className="video-item__image" src="../../images/video5.png"></img>
          </li>
          <li className="video-item">
          <img className="video-item__image" src="../../images/video6.png"></img>
          </li>
          <li className="video-item">
          <img className="video-item__image" src="../../images/video7.png"></img>
          </li>
          <li className="video-item">
          <img className="video-item__image" src="../../images/video1.png"></img>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Film; 


'use strict';

var React = require('react/addons');

require('styles/Contact.scss');

var Contact = React.createClass({
  render: function () {
    return (
		<div className="contact-container">
        	<div className="contact__bg-image"></div>
        	<div className="contact__content">
        		<h1 className="contact__content__headline">Contact</h1>
        		<p>
        			CINEKEEPER<br/>
        			Wambeler Hellweg 40<br/>
					44143 Dortmund <br/>
					Germany <br/>
        		</p>
        		<p>
        			Telefon: +49 (0) 176 821 89544<br/>
					Telefon: +49 (0) 176 327 64290
        		</p>
        		<p>
        			<a href="mailto:info@cinekeeper.de">info@cinekeeper.de</a><br/>
					<a href="http://www.cinekeeper.de">www.cinekeeper.de</a>
        		</p>
        	</div>
		</div>
      );
  }
});

module.exports = Contact;


'use strict';

var React = require('react/addons');

require('styles/We.scss');

var We = React.createClass({
  render: function () {
    return (
      <div className='we-container'>
        <div className='we__bg-image' />
        <div className='we__content'>
          <h1 className='we__content__headline'>About us</h1>
          <p>
            Moin! Wir sind Kevin Domanski (27) und Philip Herbort (29), besser bekannt unter dem Namen "Cinekeeper". Seit 2015 gaunern wir nun schon als Duo Infernale durch die schlecht gefegten Straßen Dortmunds und kreieren von Musikvideos, Imagefilmen bis hin zur TV-Werbung so ziemlich alles was man im Bewegtbild-Bereich so machen kann.
          </p>
          <p>
            Wir drehen Videos von 4:3 bis 16:9, von VHS bis 4K, von Bolly bis Holly, vom freshen Fashionzeugs bis hin zum seriösen Business-Film, stets ausgerüstet mit dem neuesten technischen Schnickschnack und immer nach unserem Credo "Antieinheitsbrei".
          </p>
          <p>
            Im Jahr 2013 haben wir uns im Hinterhof der FH Dortmund das erste Kippchen geteilt, dort haben wir dann in dem BA-Studiengang "Film&Sound" unser Handwerk gelernt und mittlerweile stehen wir seit 2015 mit unserer Videoproduktion auf eigenen Beinen. Seit 2018 sind wir außerdem Mitbegründer der Full-Service Werbeagentur "HUSH&HYPE".
          </p>
          <p>
            Eigentlich müssten wir jetzt sowas schreiben wie "Wir realisieren gemeinsam mit Ihnen das passende Produktvideo, maßgeschneidert und super kreativ, genau abgestimmt auf Ihr Unternehmen!" ... aber das macht ja jeder!
          </p>
          <p>
            Da Understatement unser dritter Vorname ist, sparen wir uns die ganzen klischee-beladenen Werbeslogans mit supertollen Leistungsangeboten und halten es kurz:<br />Ruft uns uns doch einfach mal an, schreibt uns ne Mail, addet uns bei ICQ oder kommt auf nen Kaffee vorbei: Wir sind bereit für alle Schandtaten und sind uns sicher, dass wir gemeinsam was knackiges auf die Beine stellen können!
          </p>
          <p>
            Cheers, Cinekeeper
          </p>
        </div>
      </div>
    );
  }
});

module.exports = We;

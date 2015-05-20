
// Create an invisible iframe
var iframe = document.createElement('iframe');
iframe.id = "hacky-scrollbar-resize-listener";
iframe.style.cssText = 'height: 100%; background-color: transparent; margin: 0; padding: 0; overflow: hidden; border-width: 0; position: absolute; width: 0;';
 
// Register our event when the iframe loads
iframe.onload = function() {
  // The trick here is that because this iframe has 100% width 
  // it should fire a window resize event when anything causes it to 
  // resize (even scrollbars on the outer document)
  iframe.contentWindow.addEventListener('resize', function() {
    try {
      var evt = document.createEvent('UIEvents');
      evt.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(evt);
    } catch(e) {}
  });
};

module.exports = iframe;

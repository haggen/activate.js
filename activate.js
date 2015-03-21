// Activate.js 1.0.0 Fri Mar 20 21:38:39 BRT 2015
// more on github.com/haggen/activate.js
;(function() {

  'use strict';

  var target;

  document.addEventListener('click', function(e) {
    var handle;

    if (target === undefined) {
      handle = e.target.getAttribute('activate');
      if (handle) {
        target = document.querySelector(handle);
        target.setAttribute('active', true);
      }
    } else {
      if (!(e.target === target || target.contains(e.target) && !e.target.hasAttribute('deactivate'))) {
        target.removeAttribute('active');
        target = undefined;
      }
    }
  });

}).call(this);

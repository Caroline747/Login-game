// script.js
import "nes.css/css/nes.min.css";


    const h = document.querySelector('head');
    ['./lib/dialog-polyfill.css', './lib/highlight-theme.css'].forEach(a => {
      const l = document.createElement('link');
      l.href = a;
      l.rel = '/stylesheet';
      h.appendChild(l);
    })
    import './lib/dialog-polyfill.js';
    import './lib/highlight.js';
    import './lib/nes.css.js';  
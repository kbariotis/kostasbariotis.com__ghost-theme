import '../sass/boot.scss';
import 'jquery';
import 'bootstrap-sass/assets/javascripts/bootstrap/collapse.js';

import Pjax from 'pjax';
import hljs from 'highlight.js';

window.Pjax = Pjax;
window.hljs = hljs;

new Pjax({
  elements: 'a', // default is 'a[href], form[action]'
  selectors: ['title', 'body'],
  scrollTo: 0,
  analytics: function () {

    if (window.ga) {
      var d = document.location.pathname + document.location.search + document.location.hash;
      ga('send', 'pageview', d);
    }
  }
});

document.addEventListener('pjax:complete', function () {

  var blocks = document.querySelectorAll('pre code');

  blocks.forEach(function (block) {
    hljs.highlightBlock(block);
  });
});

hljs.initHighlightingOnLoad();

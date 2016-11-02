import '../sass/boot.scss';

import $ from 'jquery';
import Pjax from 'pjax';
import hljs from 'highlight.js';

window.jQuery = $;
window.$ = $;
window.Pjax = Pjax;
window.hljs = hljs;

$(document).ready(function () {

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

  $(document).on('pjax:complete', function () {

    $('pre code').each(function (i, block) {

      hljs.highlightBlock(block);
    });
  });

  hljs.initHighlightingOnLoad();
});

!function(t){t.fn.recliner=function(n){function i(i){var a=t(i),e=a.attr(n.attrib),r=a.prop("tagName");e?(a.addClass("lazy-loading"),/^(IMG|IFRAME|AUDIO|EMBED|SOURCE|TRACK|VIDEO)$/.test(r)?(a.attr("src",e),a[0].onload=function(t){o(a)}):!0===n.getScript?t.getScript(e,function(t){o(a)}):a.load(e,function(t){o(a)})):o(a)}function o(t){t.removeClass("lazy-loading"),t.addClass("lazy-loaded"),t.trigger("lazyshow")}function a(){var i=c.filter(function(){var i=t(this);if("none"!=i.css("display")){var o=void 0!==window.innerHeight?window.innerHeight:d.height(),a=d.scrollTop(),e=a+o,r=i.offset().top;return r+i.height()>=a-n.threshold&&r<=e+n.threshold}});r=i.trigger("lazyload"),c=c.not(r)}function e(t){t.one("lazyload",function(){i(this)}),a()}var r,l,d=t(window),c=this,s=this.selector,n=t.extend({attrib:"data-src",throttle:300,threshold:100,printable:!0,live:!0,getScript:!1},n);return d.on("scroll.lazy resize.lazy lookup.lazy",function(t){l&&clearTimeout(l),l=setTimeout(function(){d.trigger("lazyupdate")},n.throttle)}),d.on("lazyupdate",function(t){a()}),n.live&&t(document).ajaxSuccess(function(n,i,o){var a=t(s).not(".lazy-loaded").not(".lazy-loading");c=c.add(a),e(a)}),n.printable&&window.matchMedia&&window.matchMedia("print").addListener(function(n){n.matches&&t(s).trigger("lazyload")}),e(this),this}}(jQuery);
function popOut(t){window.open(t)}jQuery(function(){jQuery(".lazy").recliner({attrib:"data-src",throttle:300,threshold:100,live:!0})});
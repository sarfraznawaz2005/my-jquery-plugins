/**
 * Plugin to stop navigating to current "active" page when clicking on links.
 * Author: Sarfraz Ahmed
 * Version: 1.0.0
 *
 * Example Usage:
 * $('a').stoprequest({"siteurl": "http://yoursite.com"});
 *
 */

(function ($) {
    $.fn.stoprequest = function (settings) {

        // options
        var opts = $.extend({}, $.fn.stoprequest.defaults, settings);
        var currentURL = window.location.href;

        return this.each(function () {
            var options = $.extend({}, opts, $(this).data());
            var $this = $(this);

            $this.on('click', function () {
                if (this.href === currentURL) {
                    return false;
                }
                else if (typeof options.siteurl !== 'undefined' && options.siteurl.length) {
                    if ((options.siteurl + this.href) === currentURL) {
                        return false;
                    }
                    else if ((options.siteurl + '/' + this.href) === currentURL) {
                        return false;
                    }
                    else if (('/' + this.href) === currentURL) {
                        return false;
                    }
                }
            });

        });
    };
})(jQuery);
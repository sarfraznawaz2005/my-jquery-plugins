/**
 * 
 * Plugin to add facebook-like content loading effect to specified elements.
 * Author: Sarfraz Ahmed
 * Version: 1.0.0
 *
 * Example Usage:
 * 
 * $('.someClass').contentPreview();
 * 
 * To remove added effect back:
 * 
 * $('.someClass').contentPreview.remove();
 * 
 */
(function ($) {
    $.fn.contentPreview = function (settings) {
        var opts = $.extend({}, $.fn.contentPreview.defaults, settings);
        var options = $.extend({}, opts, $(this).data());

        return this.each(function (el) {
            var $this = $(this);
            var $loader = $('<div class="__content_preview__"></div>');

            $loader.css({
                'position': 'absolute',
                'width': $this.css('width'),
                'height': $this.css('height'),
                'top': $this.offset().top,
                'left': $this.offset().left,
                'z-index': 999999999999999999999
            });

            $loader.addClass('content-placeholder');
            $('body').append($loader);

            $.fn.contentPreview.remove = function () {
                $('div.__content_preview__').remove();
            };

        });
    }
})(jQuery);
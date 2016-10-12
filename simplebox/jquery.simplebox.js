/**
 * SimpleBox - A light-weight light box plugin
 * http://sarfraznawaz.wordpress.com/
 * Author: Sarfraz Ahmed (sarfraznawaz2005@gmail.com)
 */

(function($){

	/*
	jQuery method to center an element on the screen
	-------------------------
	$(element).center();
	*/

	$.fn.center = function () {
		this.css("position", "absolute");
		this.css("top", ($(window).height() - this.outerHeight()) / 2 + $(window).scrollTop() + "px");
		this.css("left", ($(window).width() - this.outerWidth()) / 2 + $(window).scrollLeft() + "px");
		return this;
	}

    $.fn.simplebox = function(settings){

        var opts = $.extend({}, $.fn.simplebox.defaults, settings);

        return this.each(function(settings){
           var options = $.extend({}, opts, $(this).data()),
			   $this = $(this),
			   $simplebox = null,
			   $sheet = null,
			   $titlebox = null;

            $this.css({cursor: 'pointer'});

			$this.click(function(){
				if ($simplebox != null){
					$simplebox.remove();
				}

				$('<div id="simplebox_sheet"><img src="./simplebox_img/loading.gif" alt="" /></div>')
				.css({
					position:'absolute',
					width:'99%',
					height:'100%',
					top:0,
					left:0,
					zIndex:5000,
					background:'black',
					opacity:.6,
					display:'none'
				}).prependTo($('body'));;

				$sheet = $('#simplebox_sheet');
				$sheet.find('img').center();
				$sheet.show();

				$('<div id="simplebox_container"><img src="" alt="" /><div id="simplebox_title"></div></div>').prependTo($('body'));
				$simplebox = $('#simplebox_container');
				$simplebox.find('img').css('position', 'relative').attr('src', $this.attr('src'));

				$titlebox = $simplebox.find('#simplebox_title');
				$titlebox.text($this.attr('title'));
				$titlebox.css({
					position:'absolute',
					width:$simplebox.find('img').width() - 10,
					height:'auto',
					padding:'5px',
					background:'black',
					color:'#ffffff',
					fontSize:'14px',
					opacity:.7,
					top:0,
					left:0
				});

				$simplebox.css({
					position:'absolute',
					zIndex:9999,
					display:'none',
					background:'transparent',
					overflow:'auto',
					textAlign:'center',
					border:'15px solid #000000',
					WebkitBorderRadius:'15px',
					MozBorderRadius:'15px',
					borderRadius:'15px',
				}).center().animate({opacity:'toggle'}, 500, 'swing', function(){
					$sheet.find('img').hide();
				});

				$sheet.click(function(){
					$simplebox.hide();
					$(this).hide();
				});

			});

        });
    }

  $.fn.simplebox.defaults = {
    //loadingimgpath: value
  }

})(jQuery);

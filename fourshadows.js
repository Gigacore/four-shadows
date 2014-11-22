/* 
	:::: Four Shadows ::::

	Author	: Santhosh Sundar
   	URL 	: https://github.com/Gigacore/
   	License : MIT
*/

(function (fourShadows, $, undefined) {

    // Settings.
	fourShadows.settings = {
		dimension	: 512, 	// in px. Height and width should be the same.
		defaultTime	: 5, 	// in 24Hr. Casts shadow to standard 5 o'clock if something goes wrong.
		$el			: $('div.fs-cast'), // element containing icons. Must be a class.
		iconsPath	: 'path/to/icons/' // location where sprite of icons stored. Should have trailing slash.
	}

	// Casts shadow based on time of the hour. Direction of shadow is 
	// based on direction of the 'hour hand' in an analog clock.
	fourShadows.caster = function() {
		var time = new Date(),
			hour = time.getHours(),
			settings = fourShadows.settings;
			dimension = '-' + settings.dimension + 'px',
			bp = 'background-position',
			$el = settings.$el,
			defaultCast = $el.css(bp, dimension + ' 0'); // defaults to 5 o'clock.

		hour >= 00 && hour <= 03 || hour >= 13 ? $el.css(bp, '0 0') : defaultCast;							// 1 o'clock shadow				 
		hour >= 04 && hour <= 06 || hour >= 16 ? $el.css(bp, dimension + ' 0') : defaultCast;				// 5 o'clock shadow
		hour >= 06 && hour <= 09 || hour >= 18 ? $el.css(bp, dimension + ' ' + dimension) : defaultCast;	// 7 o'clock shadow
		hour >= 09 && hour <= 12 || hour >= 21 ? $el.css(bp, '0 ' + dimension) : defaultCast;				// 10 o'clock shadow
	}

	// Initialization.
	fourShadows.init = function() {
		fourShadows.settings.$el.each(function() {
			$(this).css('background', 'url('+ fourShadows.settings.iconsPath + $(this).data('icon') +') no-repeat');
		});
		fourShadows.caster();
	}

	$(document).ready(function () {
    	fourShadows.init();
	});

})(window.fourShadows = window.fourShadows || {}, jQuery);
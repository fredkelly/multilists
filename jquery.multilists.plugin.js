/*************************************************
**  jQuery Multi Column Lists version 1.0.5
**  copyright Fred Kelly, licensed GPL & MIT
**  http://fredkelly.net/
**************************************************/

(function($){
	$.fn.multilists = function(options, callback) {

		var defaults = {
			cols: 2
		};

		var options = $.extend(defaults, options);

		return this.each(function() {

			obj = $(this);
			$items = obj.children('li');

			// don't waste time on empty lists
			if ($items.size() > 1) {

				// if no width set, container divided by columns
				if (!options.colWidth) {
					options.colWidth = Math.floor(obj.width()/options.cols);
				}
				
				// create our variables
				var currentCol = 0;
				var vertReturn = 0;
				var maxHeight = 0;

				// loop list items
				$items.each(function(i) {
					// negative top margin
					if (i % Math.round($items.size()/options.cols) == 0 && i > 0) {
						$(this).css('margin-top', -vertReturn);
						if (vertReturn > maxHeight) {
							maxHeight = vertReturn;
						}
						vertReturn = 0;
						currentCol++;
					}
					// add left margin
					if (currentCol > 0) {
						$(this).css('margin-left', currentCol * (options.colWidth + ($(this).outerWidth(true) - $(this).width())) + 'px');
					}
					vertReturn += $(this).outerHeight();
				});
				
				// set height on containing list
				obj.height(vertReturn > maxHeight ? vertReturn : maxHeight);

			}
			
			// if the callback is a function, call it...
			if (typeof callback == 'function') {
				callback.call(this);
			}

		});
		
	};
})(jQuery);

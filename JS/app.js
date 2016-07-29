/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. 
 * and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */

$(function() {
	 $('.jcarousel')
			.on('jcarousel:create jcarousel:reload', function() {
			var element = $(this),
					width = element.innerWidth();

				element.jcarousel('items').css('width', width + 'px');
			})

	 .jcarousel();
});

$(function() {
	 $('.jcarousel-control-prev')
			 .on('jcarouselcontrol:active', function() {
			$(this).removeClass('inactive');
			 })
			 .on('jcarouselcontrol:inactive', function() {
			$(this).addClass('inactive');
			 })
			 .jcarouselControl({
			target: '-=1'
			 });

	 $('.jcarousel-control-next')
			 .on('jcarouselcontrol:active', function() {
			$(this).removeClass('inactive');
			 })
			 .on('jcarouselcontrol:inactive', function() {
			$(this).addClass('inactive');
			 })
			 .jcarouselControl({
			target: '+=1'
			 });
});

$(function() {
		$('.jcarousel')
	 .jcarouselAutoscroll({
			 interval: 3000,
			 target: '+=1',
			 autostart: true
	 })
		;
});

$('.jcarousel').jcarousel({
		wrap: 'circular'
});

/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		// Reveal the header as soon as the DOM is ready (plus a short delay for
		// the sky image), instead of waiting for every image on the page to load.
		var reveal = function() { $body.removeClass('is-preload'); };
		$window.on('load', function() { window.setTimeout(reveal, 100); });
		$(function() { window.setTimeout(reveal, 800); });

	// Custom smooth scrolling for navigation buttons
	$('.scrolly').on('click', function(e) {
		var href = $(this).attr('href');
		if (href.charAt(0) === '#') {
			e.preventDefault();
			var target = $(href);
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, 'swing');
			}
		}
	});

})(jQuery);
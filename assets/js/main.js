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

	// Slim top menu: visible only while the full-screen header is scrolled away.
		var $header = $('#header'), $topnav = $('#topnav');
		var updateNav = function() {
			$body.toggleClass('nav-visible', $window.scrollTop() > $header.outerHeight() - 80);
		};
		$window.on('scroll resize', updateNav);
		$(updateNav);
		if ('IntersectionObserver' in window && $header.length) {
			// Also react when the header enters or leaves the viewport, which
			// keeps working when scroll events are throttled (iOS momentum scrolling).
			new IntersectionObserver(updateNav, { rootMargin: '-80px 0px 0px 0px' }).observe($header[0]);
		}

	// Custom smooth scrolling for navigation buttons
	$('.scrolly').on('click', function(e) {
		var href = $(this).attr('href');
		if (href.charAt(0) === '#') {
			e.preventDefault();
			var target = $(href);
			if (target.length) {
				// Leave room for the fixed menu, except when going back to the top.
				var offset = (href === '#header') ? 0 : $topnav.outerHeight();
				$('html, body').animate({
					scrollTop: target.offset().top - offset
				}, 1000, 'swing');
			}
		}
	});

})(jQuery);
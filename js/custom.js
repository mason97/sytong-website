(function($) {
	"use strict";

/* ----------------------------
    preloader
    ------------------------------ */

$(window).on('load', function(){        
	$('#preloader').delay(300).fadeOut('slow',function(){
	$(this).remove();
	});
});

/* ----------------------------
    Sticky
    ------------------------------ */

jQuery(window).on('scroll', function() {
	var distanceY = window.pageYOffset || document.documentElement.scrollTop,
		shrinkOn = 80,
		header = document.querySelector("header");
	if (distanceY > shrinkOn) {
		classie.add(header,"sticky");
	} else {
		if (classie.has(header,"sticky")) {
			classie.remove(header,"sticky");
		}
	}			
});

/* ----------------------------
    Top Scroll
    ------------------------------ */

var offset = 220;
var duration = 500;
jQuery(window).on('scroll', function() {
	if (jQuery(this).scrollTop() > offset) {
		jQuery('.scroll-top').fadeIn(duration);
	} 
	else {
		jQuery('.scroll-top').fadeOut(duration);
	}
});
jQuery('.scroll-top').on('click', function() {
	event.preventDefault();
	jQuery('html, body').animate({scrollTop: 0}, duration);
	return false;
})

/* ----------------------------
	@module       Copyright
	@description  Evaluates the copyright year
    ------------------------------ */
	
var currentYear = (new Date).getFullYear();
	$(document).ready(function () {
		$(".current-year").text((new Date).getFullYear());
});

/* ----------------------------
    counter up
    ------------------------------ */

$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

/* ----------------------------
    testimonials
    ------------------------------ */

$('.testimonial-carousel').owlCarousel({
	loop: true,
	margin: 15,
	dots:true,
	items: 1,
	nav: false,
	autoplay:true,
	navText : ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
	responsiveClass: true
})

/* ----------------------------
    partner
    ------------------------------ */
	
$('.partner-carousel').owlCarousel({
	loop: true,
	margin: 10,
	dots:false,
	nav: false,
	autoplay:true,
	responsiveClass: true,
	responsive: {
	  0: {
		items: 2
	  },
	  767: {
		items: 3
	  },
	  768: {
		items: 3
	  },
	  1000: {
		items: 5,
		loop: true
	  }
	}
})

/* ----------------------------
    portfolio
    ------------------------------ */

var filterList = {
	init: function () {
	// MixItUp plugin
	// http://mixitup.io
	$('#portfoliolist').mixItUp({
  		selectors: {
    	target: '.portfolio',
    	filter: '.filter'
    		},
				load: {
				filter: '.design, .branding, .advertising, .photography, .wordpress'  
			}
		});
	}
};

// Run the show!
filterList.init();

/* ----------------------------
    venobox
    ------------------------------ */

$('.venobox').venobox();

})(jQuery);
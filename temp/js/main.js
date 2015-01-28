var $win = $(window);
var $homeBanner = $('.home-banner');


if (window.screen.width >= 480) {

	$win.on('scroll', function () {
		
		var scrollPos = $win.scrollTop();

		$homeBanner.css('background-position', 'center ' + scrollPos / 3 + 'px');
	});
}

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

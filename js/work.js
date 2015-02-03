var $win = $(window);
var $banner = $('.banner');
var bannerOffset = $banner.offset();

	$win.on('scroll', function () {
		
		var scrollPos = $win.scrollTop();
		var Pos = (scrollPos - bannerOffset.top) / 2;

		$banner.css('background-position', 'center ' + Pos + 'px');
	});
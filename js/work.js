var $win = $(window);
var $iawBanner = $('.iaw-banner');
var iawBannerOffset = $iawBanner.offset();
var $salamBanner = $('.salam-banner');
var salamBannerOffset = $salamBanner.offset();

	$win.on('scroll', function () {
		
		var scrollPos = $win.scrollTop();
		var iawPos = (scrollPos - iawBannerOffset.top) / 2;
		var salamPos = (scrollPos - salamBannerOffset.top) / 2;

		$iawBanner.css('background-position', 'center ' + iawPos + 'px');
		$salamBanner.css('background-position', 'center ' + salamPos + 'px');
	});
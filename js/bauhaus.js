/*-------------------------------------------------------------------------------
	  Projects Modal
	-------------------------------------------------------------------------------*/
  ( function($) {
    'use strict';

	$('.popup-with-zoom-anim').magnificPopup({
          type: 'inline',
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          fixedContentPos: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in'
        });
})(jQuery);

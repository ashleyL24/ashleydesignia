$( document ).ready(function() {
    console.log( "JQuery READY!!!!" );
});



(function($) {
  'use strict';
      // portfolio
      $('.gallery.swers ul li a').click(function() {
          var itemID = $(this).attr('href');
          $('.gallery.swers ul').addClass('item_open');
          $(itemID).addClass('item_open');
          return false;
      });
      $('.close.trialsed').click(function() {
          $('.port, .gallery.swers ul').removeClass('item_open');
          return false;
      });


      $('.nav-item:not(.dropdown)').click(function() {
        $('body.nav-active').removeClass('nav-active');
      });

      $('.dropdown-item.nav-link').click(function() {
        $('body.nav-active').removeClass('nav-active');
      });
})(jQuery);


jQuery(document).ready(function(){

	"use strict";

	// here all ready functions

	beny_tm_cursor();


});


function beny_tm_cursor(){
    "use strict";

	var myCursor	= jQuery('.mouse-cursor');

	if(myCursor.length){
		if ($("body")) {
      
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .toky_tm_topbar .trigger, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .toky_tm_topbar .trigger, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

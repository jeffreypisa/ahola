(function($) {
  $( document ).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $("header").addClass("scrolled");
      } else {
        $("header").removeClass("scrolled");
      }
    });
    $('body').addClass('loaded');
    
    var setbw = $('.js-setbw').text();
    
    if ( setbw == 'links' ) {
	    $('header').addClass('leftwhite');
    }
    
		if ( setbw == 'rechts' ) {
	    $('header').addClass('rightwhite');
    }
  });
}(jQuery));
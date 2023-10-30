(function($) {
  $( document ).ready(function() {
    $(".js-menu").on("click", function() {
      $("body").toggleClass("menuopen");
      $("body").toggleClass("opensidemenu");
      $(".js-menu").toggleClass("is-active");
      $(".js-mobilemenu").toggleClass("open");
    });
    
    $( window ).resize(function() {
      $("body").removeClass("menuopen").removeClass("opensidemenu");
      $(".js-menu").removeClass("is-active");
    });
    
  });
}(jQuery));
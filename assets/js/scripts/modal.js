(function($) {
  $( document ).ready(function() {
    $(".js-closemodal, .modal-dialog").on('click', function() {
      $("#modal").modal('hide');
    });
    
    $(".modal").on("show", function () {
      $("body").addClass("modal-open");
    }).on("hidden", function () {
      $("body").removeClass("modal-open");
    });
  });
}(jQuery));
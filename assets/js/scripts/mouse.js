(function($) {

	$(window).mousemove(function(event) {

		$('#mouse-pointer').css({
			'top' : event.pageY + 'px',
			'left' : event.pageX + 'px'
		});

		var isHovered = !!$('a[href], button').filter(function() { return $(this).is(":hover"); }).length;

		if ( isHovered ) {
			$('#mouse-pointer').addClass('clickable');
		} else {
			$('#mouse-pointer').removeClass('clickable')
		}
		

		$('.modal-dialog').mouseenter(function(){
       $('#mouse-pointer').addClass('close');
    });

    $('.modal-dialog').mouseleave(function(){
       $('#mouse-pointer').removeClass('close');
    });
		
		$('.fullpage-slide').mouseenter(function(){
       $('#mouse-pointer').addClass('arrow');
    });

    $('.fullpage-slide').mouseleave(function(){
       $('#mouse-pointer').removeClass('arrow');
    });
    
    $('.fullpage-nextslide').mouseenter( function() { 
			$('#mouse-pointer').addClass('right');
		});
		
    $('.fullpage-nextslide').mouseleave( function() { 
			$('#mouse-pointer').removeClass('right');
		});
		
		$('.fullpage-prevsection').mouseenter( function() { 
			$('#mouse-pointer').addClass('up');
		});
		
    $('.fullpage-prevsection').mouseleave( function() { 
			$('#mouse-pointer').removeClass('up');
		});
		
		$('.fullpage-nextsection').mouseenter( function() { 
			$('#mouse-pointer').addClass('down');
		});
		
    $('.fullpage-nextsection').mouseleave( function() { 
			$('#mouse-pointer').removeClass('down');
		});
		
		$('.cards-archive .card, .foto, header.leftwhite .logo a, .mod-mobilemenu, .hamburger.is-active').mouseenter(function(){
       $('#mouse-pointer').addClass('white');
    });
    
    $('.cards-archive .card, .foto, header.leftwhite .logo a, .mod-mobilemenu, .hamburger.is-active').mouseleave( function() { 
			$('#mouse-pointer').removeClass('white');
		});
    

	});

}(jQuery));
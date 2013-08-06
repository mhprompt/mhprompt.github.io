$(window).load(function() {

	if ($(window).width() >= 767) {
		equalheight('.masthead .row .col');
		equalheight('.feature .row .col');
		equalheight('.text.listing .row .col');
		equalheight('.image.listing .row .col');
	} else {
		$('.masthead .row .col').removeAttr('style');
		$('.feature .row .col').removeAttr('style');
		$('.text.listing .row .col').removeAttr('style');
		$('.image.listing .row .col').removeAttr('style');
	}
	
});


$(window).resize(function(){

	if ($(window).width() >= 767) {
		equalheight('.masthead .row .col');
		equalheight('.feature .row .col');
		equalheight('.text.listing .row .col');
		equalheight('.image.listing .row .col');
	} else {
		$('.masthead .row .col').removeAttr('style');
		$('.feature .row .col').removeAttr('style');
		$('.text.listing .row .col').removeAttr('style');
		$('.image.listing .row .col').removeAttr('style');
	}
	
});



$(document).ready(function() {
	
	$('#wrapper').hide();
	$('#wrapper').fadeIn(500);
	
	function cursorbleep(){
		if($('.cursor').text() === '_')
		{
			$('.cursor').html('&nbsp;');
		} else { 
			$('.cursor').html('_');
		}
	}
                
   setInterval(function(){ cursorbleep() },700);
   
   $(".feature-item.video").fitVids();

	$('.mobile-menu-button a').click(function() {
		$('.menu').slideToggle('fast');
		$('.mobile-menu-button').toggleClass('on');
			
		return false;
	});
	
	if($('.mobile-menu-button').is(":visible")){
		
		$('.menu .main ul li a').click(function() {
			$('.menu').slideToggle('fast');
			$('.mobile-menu-button').toggleClass('on');
				
			return false;
		});
		
	}
	
	$('nav.main').scrollspy();
	
	$.localScroll({hash:'true', duration: 1000, offset:-45 });
	
	
	
	$('a.details, a.gi').click(function(){
	
		$('.get-involved-panel').stop().removeClass('hide').show().animate({ right: '0px'}, 500,
			function(){}	
		);
		
		$('.get-involved-panel').addClass('current-modal');

	});
	
	$('a.submit-open').click(function(){
	
		$('.submit-panel').stop().removeClass('hide').show().animate({ right: '0px'}, 500,
			function(){}	
		);
		
		$('.submit-panel').addClass('current-modal');

	});
	
	$('.get-involved-panel .close').click(function(){
		
		$('.get-involved-panel').stop().animate({ right: '-1000px'}, 500,
			function(){
				
				$(this).hide();
			}	
		)
		$('.get-involved-panel').removeClass('current-modal');
		
		
		return false;
	});
	
	$('.submit-panel .close').click(function(){
		
		$('.submit-panel').stop().animate({ right: '-1000px'}, 500,
			function(){
				$(this).hide();
			}	
		)
		$('.submit-panel').removeClass('current-modal');
		
		
		return false;
	});
	
});
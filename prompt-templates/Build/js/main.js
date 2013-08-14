$(window).load(function() {

	if ($(window).width() >= 767) {
		equalheight('.masthead .row .col');
		equalheight('.feature .row .col');
		equalheight('.text.listing.green .row .col');
		equalheight('.text.listing.red .row .col');
		equalheight('.image.listing .row .col');
		equalheight('.general .row .col');
	} else {
		$('.masthead .row .col').removeAttr('style');
		$('.feature .row .col').removeAttr('style');
		$('.text.listing .row .col').removeAttr('style');
		$('.image.listing .row .col').removeAttr('style');
		$('.general .row .col').removeAttr('style');
	}
	
});


$(window).resize(function(){

	if ($(window).width() >= 767) {
		equalheight('.masthead .row .col');
		equalheight('.feature .row .col');
		equalheight('.text.listing.green .row .col');
		equalheight('.text.listing.red .row .col');
		equalheight('.image.listing .row .col');
		equalheight('.general .row .col');
	} else {
		$('.masthead .row .col').removeAttr('style');
		$('.feature .row .col').removeAttr('style');
		$('.text.listing.green .row .col').removeAttr('style');
		$('.text.listing.red .row .col').removeAttr('style');
		$('.image.listing .row .col').removeAttr('style');
		$('.general .row .col').removeAttr('style');
	}
	
});

function closeAllPanels(){
			
	$('.panel').stop().animate({ right: '-1000px'}, 500,
		function(){
			
			$(this).hide();
		}	
	)
		
}

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
	
	
	
	$('a.details').click(function(){
	
		closeAllPanels();
	
		$(this).next('.panel').stop().removeClass('hide').show().animate({ right: '0px'}, 500,
			function(){}	
		);

	});
	
	$('a.panel-open').click(function(){

		
		var getPanel = $(this).attr('id');
		getPanel = '#' + getPanel + '-info';
		
		console.log(getPanel);
		
		$(getPanel).stop().removeClass('hide').show().animate({ right: '0px'}, 500,
			function(){}	
		);
		

	});
	
	$('.panel .close').click(function(){
		
		$(this).offsetParent('.panel').stop().animate({ right: '-1000px'}, 500,
			function(){
				
				$(this).hide();
			}	
		)
		
		return false;
	});

	
});
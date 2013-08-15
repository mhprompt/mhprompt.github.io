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
	
	$('.side-buttons li').removeClass('on');	
	$('.side-buttons li.speaker-panel').addClass('on');
		
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
	
	$('.side-buttons li.conference-panel a').click(function(){
		
		$('.side-buttons li').removeClass('on');	
		$('.side-buttons li.conference-panel').addClass('on');
	
		$('#conference').stop().removeClass('hide').show().animate({ right: '0px'}, 500,
			function(){}	
		);

	});
	
	$('.side-buttons li.speaker-panel a').click(function(){
		
		$('.side-buttons li').removeClass('on');	
		$('.side-buttons li.speaker-panel').addClass('on');
		
		closeAllPanels();

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
		
		$('.side-buttons li').removeClass('on');	
		$('.side-buttons li.speaker-panel').addClass('on');
		
		return false;
	});
	
});


function initialize() {

  var mapOptions = {
    zoom: 3,
    center: new google.maps.LatLng(43.068436, -41.672300),
    mapTypeControl: false,
    scrollwheel: false
  };
  
  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
  
  setMarkers(map, conferences, conferencesicon, 'conference');
  setMarkers(map, speakers, speakersicon, 'speaker');
	
}

var conferencesicon = 'img/conferenceicon.png';
var speakersicon = 'img/speakericon.png';

var conferences = [
  ['Madison Ruby', 43.074476, -89.388426, 4, 'August 23-24, 2013', 'http://madisonruby.org/'],
  ['True North PHP', 43.612823, -79.753867, 5, 'November 7-9, 2013', 'http://truenorthphp.com/'],
  ['Steel City Ruby', 40.446669,-79.992369, 3, 'August 16-17, 2013', 'http://steelcityruby.org/'],
  ['Nickel City Ruby', 42.885418,-78.87165, 2, 'September 20-21, 2013', 'http://nickelcityruby.com/'],
  ['Windy City Rails', 41.770031, -87.566898, 1, 'September 12-13, 2013', 'http://www.windycityrails.org/']
];

var speakers = [
  ['Ed Finkler', 40.428786, -86.907547, 3, 'http://funkatron.com'],
  ['Greg Baugues', 41.900233,-87.624421, 2, 'http://blog.baugues.com'],
  ['John Dalton', -42.642041,147.302971, 1, 'http://blog.johndalton.info']
];


function setMarkers(map, locations, markericon, type) {

  var image = {
    url: markericon,
    size: new google.maps.Size(30, 39),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 30)
  };

  var shape = {
      coord: [1, 1, 1, 39, 30, 39, 30 , 1],
      type: 'poly'
  };
  
  var infoWindow = new google.maps.InfoWindow;
  
  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    var myLatLng = new google.maps.LatLng(location[1], location[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        shape: shape,
        title: location[0],
        zIndex: location[3]
    });
   
   if(type === 'conference'){
   	var content = '<div class="map-content"><h2>' + location[0] + '</h2><div class="date">' + location[4] + '</div><div class="url"><a href = "' + location[5] + '">' + location[5] + '</a></div>' + '</div>';
   } else if(type === 'speaker') {
	   var content = '<div class="map-content"><h2>' + location[0] + '</h2><div class="url"><a href = "' + location[4] + '">' + location[4] + '</a></div>' + '</div>';
   }
    
   
   google.maps.event.addListener(marker, 'click', (function(marker, content) {
       return function() {
           infoWindow.setContent(content);
           infoWindow.open(map, marker);
       }
   })(marker, content));
   
   
  }
  
}

google.maps.event.addDomListener(window, 'load', initialize); 









































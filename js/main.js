/* Y7 group 2015
 * Im Auftrag von Indilex
 * (c) Alle Rechte vorbehalten
 * - ME 
 */

jQuery(document).ready(function($)  {
	
	// Slider
	
	//$('.slider').children().addClass('slide');
	
	//$('.flexslider').flexslider();
	
	// ShortCode Ansicht
	
	$('.sc > div:nth-child(1)').addClass('sc-image');
	$('.sc > div:nth-child(2)').addClass('sc-content');
	 
	// News Ansicht
	$('.news-list-view > div:nth-child(even)').addClass('news-odd').removeClass('no-gutter-left').addClass('no-gutter-right');
	$('.news-list-view > div:nth-child(even) div.date_box').removeClass('date_box').addClass('date_box_odd');
	
	
  	// Vertical Tabs
     //$( ".tx-jfmulticontent-pi1" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
     //$( ".tx-jfmulticontent-pi1 > li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
     
     // Follow Page height Fix
     heightl = $('.mainl').height();
     heightr = $('.mainr').height();
     
     //$('body').prepend('Left:' + heightl + " Right: " + heightr);
     $(window).resize( function() {
 		resizeMain();
     });
     
     resizeMain();
 
 	function resizeMain () {
 		     if ($(window).width() > 995 ){
			     if (heightl < heightr) {
			     	$('.mainl').css('height', heightr );
			     } else {
			     	$('.mainr').css('height', heightl );
			     }
		     } else {
		     	$('.mainl').css('height','auto');
		     	$('.mainr').css('height','auto');
		     }
 	}

    // Search Box
    
    sword = '.searchbox-sword';
    sbox = '.sword-border';
    form = '.indexedsearch';
    button = '.searchbox-button';
    color = '#208ccc';
    
     $(form).hover( function() {
		sb_on();
     }, function() {
		setTimeout(sb_off,1500);
	 } );
     
     function sb_off() {
     	if (!( $(sword).hasClass('focus') ) ) {
     		$(button).animate().removeClass('fill');
	     	//$(button).animate({'background-color' :'#208ccc'});
	     	$(sbox).stop().animate({'opacity' :'0'});
	     	$(form).css("z-index", "100");
	     	$(button).attr('src','fileadmin/hkk/images/search_blue.png');
	    }
     }
     function sb_on() {
     	$(button).animate().addClass('fill');
       // $(button).animate({'background-color' : 'white'});
     	$(sbox).stop().animate({'opacity' :'1'});
     	//$(sbox).fadeIn().css("opacity", "1");
     	$(form).css("z-index", "501");
     	$(button).attr('src','fileadmin/hkk/images/search_white.png');
     }
     
     $(sword).focus().addClass('focus');
     
     $(sword).blur( function() {
     	$(sword).removeClass('focus');
     	setTimeout(sb_off,1500);
     	
     });
     
     
          
	// Opacity Effekt
	$("#scrollup i").hover(
		function() {
			$('#scrollup i').fadeIn().addClass("opacity50");
		 },
		function() {		
			$('#scrollup i').fadeIn().removeClass("opacity50");
		}
	);
	
	$('.burger').click(function(){
		$('.mm').toggleClass("expanded");
	});
		
	// Scroll Up TODO Tobi wegen Funktion fragen
	
	$(function() {
	  	$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 800);
		        return false;
	      	  }
	    	}
	  	});
	});
	

});

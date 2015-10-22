/* Y7 group 2015
 * Im Auftrag von Indilex
 * (c) Alle Rechte vorbehalten
 * - ME 
 */

jQuery(document).ready(function($)  {
	// Newsansicht
	
	/*var article = $('.main').find('.article');
	//var dateboxes = $('.main .date_box');
	
	article.each(function(index){
		var aheight = $(this).height();
		console.log("Hoehe" + aheight);
		$(this).children('.date_box').css('minHeight',aheight-20);
		$(this).children('.date_box_odd').css('minHeight',aheight-20);
	});
	*/
	
	//---START---//
	/* 	MAKE DIV CLICKABLE BASED ON CLASS 'divlink' 
		- get Link and wrap div with it
		- get Link Text and set it as title 
	
	var lefth = $('.scleft .sc').find('a').attr('href');
	var leftt = $('.scleft .sc').find('a').attr('target');
	var lefttext = $('.scleft .sc').find('h3').find('a').text();
	

			$('.scleft .sc').wrap("<a href='"+curlink+"' class='link-wrap' title='"+lefttext+"' target='"+curlinktarget+"'></a>"); */
			
		$('.sc').each(function() {
		var curlink = $(this).find('a').attr('href');
		var curlinktarget = $(this).find('a').attr('target');
		var curlinktitle = $(this).find('a').text();
		$(this).attr('data-url',curlink);
		if(curlinktarget == null) {
			$(this).wrap("<a href='"+curlink+"' class='sclink' title='"+curlinktitle+"'></a>");
		} else {
			$(this).wrap("<a href='"+curlink+"' class='sclink' title='"+curlinktitle+"' target='"+curlinktarget+"'></a>");
		};
	});
	
			$('.article').each(function() {
		var curlink = $(this).find('a').attr('href');
		var curlinktarget = $(this).find('a').attr('target');
		var curlinktitle = $(this).find('a').text();
		$(this).attr('data-url',curlink);
		if(curlinktarget == null) {
			$(this).wrap("<a href='"+curlink+"' class='articlelink' title='"+curlinktitle+"'></a>");
		} else {
			$(this).wrap("<a href='"+curlink+"' class='articlelink' title='"+curlinktitle+"' target='"+curlinktarget+"'></a>");
		};
	});
	

//---END---//
	
	// ShortCode Ansicht
	
	$('.sc > div:nth-child(1)').addClass('sc-image');
	$('.sc > div:nth-child(2)').addClass('sc-content');
		/*
      * Fix Shortcode Height
      */
      var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0; 
      
      if (isMac) {
		  $(".top").addClass("mac");
		 // console.log("im a mac!");
		} else {
		//	console.log("not a mac!");
		  $(".top").addClass("pc");
		}
        
   //  console.log('Max: ' + max + " [sc1/2/3]: " + sc1 + " " + sc2 + " " + sc3);
   var max = 0;
	  getMax();
     resizeShortcodes();
      
    function getMax() {
      	var sc1 = $('.scleft .sc-content').height();
     	var sc2 = $('.scmiddle .sc-content').height();
     	var sc3 = $('.scright .sc-content').height();
     	max = sc1;
 		//var marginb = 20;

 		     
			     if (sc2 > max) {			     	
					max = sc2;	
					 console.log('Max: ' + max );	     	
			     }
			     if (sc3 > max) {
			     	max = sc3;
			     	 console.log('Max: ' + max );
			     }
	}	
     
 	function resizeShortcodes () {
			if ($(window).width() > 959 ){
				//getMax();
		     	$('.scleft .sc-content').height(max ); //+ marginb);
		     	$('.scmiddle .sc-content').height(max) ;//+ marginb);
		     	$('.scright .sc-content').height(max );//+ marginb);
		     
		     }
		/*     else {
		     	$('.scleft .sc-content').css({height: "auto"});
		     	$('.scmiddle .sc-content').css({height: "auto"});
		     	$('.scright .sc-content').css({height: "auto"});
 		} */
 	}
 	
 	$('.sc .bodytext a').unwrap();
 	
 	/*
 	var link = $('.scleft a').detach();
 	link.appendTo('.scleft .sc');
 	link = $('.scmiddle a').detach();
 	link.appendTo('.scmiddle .sc');
 	link = $('.scright a').detach();
 	link.appendTo('.scright .sc');
 	*/
	// Menu Respo
	var thewindow = $(window).width();
	if (thewindow < 995) {
		$('.main .container').width(thewindow - 20);
	}
	
	$(window).resize(function() {
		resizeShortcodes();
		thewindow = $(window).width();
		if (thewindow >= 995) {
			$('ul.mm').fadeIn('fast');
		}
		// Fix News anzeige Respo
		else {
			$('.main .container').width(thewindow - 20);
		}
	});
	
	
	

	
	
	 
	// News Ansicht
	$('.news-list-view > div:nth-child(odd)').addClass('news-even');
	$('.news-list-view > div:nth-child(even)').addClass('news-odd'); //.removeClass('no-gutter-left').addClass('no-gutter-right');
	$('.news-list-view > div').addClass('no-gutter');
	$('.news-list-view > div:nth-child(even) div.date_box').removeClass('date_box').addClass('date_box_odd');
	
	
	// Newsletter Focus on Blur
	
	var Input = $('input.nemail');
    var default_value = Input.val();

    Input.focus(function() {
        if(Input.val() == default_value) Input.val("");
    }).blur(function(){
        if(Input.val().length == 0) Input.val(default_value);
    });
     
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
    
    var six = 'ul.mm li:eq(6)';
    var seven = 'ul.mm li:eq(7)';
    
        
    focus = false;
   $(sbox).hide("slide", { direction: "right" }, 1);
   // sb_off();
    
     $(button).hover( function() {
		setTimeout(sb_on,200);			
     }, function() {
		setTimeout(sb_off,1500);		
	 } );
     
     function sb_off() {
     	if (!focus) {
     		     	 
	     	$(sbox).hide("slide", { direction: "right" }, 500);
	     	
	     	setTimeout(function() {
	     		$(sbox).css("z-index", "-9999"); 
		     	$(form).css("z-index", "100");
		  //  $('ul.mm li:eq(4) a').fadeIn();
     	//	$('ul.mm li:eq(5) a').fadeIn();
     			$('ul.mm li:eq(5)').removeClass('hide-li');
     			$('ul.mm li:eq(6)').removeClass('hide-li');		     	
		     	$(button).animate().removeClass('fill');
	     		$(button).attr('src','fileadmin/hkk/images/search_blue.png');
	     	}, 500);
	     	
    
	    }
     }
     function sb_on() {
     	$(button).animate().addClass('fill');
     	//$('ul.mm li:eq(4) a').fadeOut();
     	//$('ul.mm li:eq(5) a').fadeOut();
     	$('ul.mm li:eq(5)').addClass('hide-li');
     	$('ul.mm li:eq(6)').addClass('hide-li');

     	$(button).attr('src','fileadmin/hkk/images/search_white.png');
     
     	$(form).css("z-index", "501"); 
     	$(sbox).css("z-index", "9999");  
     	$(sbox).show("slide", { direction: "right" }, 500);
     	   	
     	
     }
          
     $(sword).focus( function()
     { 
     	//$(this).addClass('focus');
     	focus = true;
     });
     
     $(sword).blur( function() {
     	focus = false;
     	//$(this).removeClass('focus');
     	setTimeout(sb_off,1500);     	
     });
     
     /**
      * Fixed Menu Top 
      */
     
        var header = $(".menu");
        var body = $('body');
        var slider = $(".slider-outer");
        var titlebar = $(".titlebar");
        //y = 0;
        var isTouchDevice = 'ontouchstart' in document.documentElement;
       
    function checkScrollPosition() {
    	var y = $(document).scrollTop();
	    if ((y >= 30) && (!isTouchDevice)) //  &&  $(window).width() >= 979 ) 
	    {	
	    	
	    	//body.addClass('fixme');
	        header.addClass('fixedmenu');
	        slider.addClass('fixedslider');
	        titlebar.addClass('fixedtitle');
	        
	    } else {
	    //	body.removeClass('fixme');
	        header.removeClass('fixedmenu');
	        slider.removeClass('fixedslider');
	        titlebar.removeClass('fixedtitle');
	    }
    }

     
    $(document).scroll( function() { checkScrollPosition(); });	
    $(document).resize( function() { checkScrollPosition(); });	
     
     
     
          
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
		$('.ulmenu ul').slideToggle("fast");
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
	
	/**
	 * Slides Parallax 0 
	 */
	
	//$('.flexslider img').attr("data-parallax","{'y' : 0}");
		

});

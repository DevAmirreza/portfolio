	var scrollPos = 0.3 ; 
	var incrementValue = 0 ; 
// $(window).scroll(function() {
	// if(scrollPos < 0.8)
	// scrollPos += 0.01 ;
 // $('.in_header').css({opacity:scrollPos });
 
// });


var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    
	scrollPos += 0.01 ;
 //action 1 
 $('.in_header').css({opacity:scrollPos });
 //action 2 
 if(incrementValue != 100)
 incrementValue += 3  ; 
 $('.next').css({marginLeft:-250 + incrementValue});
 
 
   } else {
      // upscroll code
	  scrollPos = $('.in_header').css("opacity") ; 
 	  console.log($('.in_header').css("opacity")) ;
	  scrollPos -= 0.01 ;
 $('.in_header').css({opacity:scrollPos });
 
   }
   lastScrollTop = st;
});
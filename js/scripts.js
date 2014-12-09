/* affix the navbar after scroll below header */
$('#nav').affix({
	offset: {
		top: $('header').height()-$('#nav').height()
	}
});
/* affix the navbar after scroll below header */
/*$(document).ready(function(){
   $(window).bind('scroll', function() {
   var navHeight = $( window ).height() - 60;
		 if ($(window).scrollTop() > navHeight) {
			 $('#nav').addClass('fixed');
		 }
		 else {
			 $('#nav').removeClass('fixed');
		 }
	});
});*/

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

$(document).ready(function() {
  var bodyHeight = $("body").height();
  var vwptHeight = $(window).height();
  if (vwptHeight > bodyHeight)
  {
    $("footer#footer").css("position","absolute").css("bottom",0);
  }
});

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top+0
				}, 1000);
				return false;
			}
		}
	});
});

// Dropdown Menu Fade    
jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
});

// Dropdown Menu Fade    
jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });
});
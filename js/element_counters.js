//remove class

jQuery(window).scroll(function(){
			  var sticky = jQuery('header.header'),
			      scroll = jQuery(window).scrollTop();

			  if (scroll >= 100) sticky.addClass('fixed');
			  else sticky.removeClass('fixed');
			});
			
//toggle Classs

function opentoggle() {
							jQuery('.topmenu').toggle();
							jQuery('.header').toggleClass("submenuactive");
						}
						
//count 

var revapi;
			jQuery(document).ready(function() {

			   revapi = jQuery('.tp-banner').revolution(
				{
					delay:9000,
					startwidth:1170,
					startheight:650,
					hideThumbs:10,
					fullWidth:"on",
					forceFullWidth:"on"

				});

			});	//ready

			

			function isScrolledIntoView(el) {
			  var elemTop = el.getBoundingClientRect().top;
			  var elemBottom = el.getBoundingClientRect().bottom;

			  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
			  return isVisible;
			}

			jQuery(window).on('scroll', function() {
			  if (isScrolledIntoView(document.getElementById('maindiv'))) {
			    jQuery('.count').countTo();

			    // Unbind scroll event
			    jQuery(window).off('scroll');
			  }
			});
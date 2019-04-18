jQuery(document).ready(function(){
	jQuery('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = jQuery(target);
		jQuery('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing', function () {
			//window.location.hash = target;
		});
	});

	jQuery(window).scroll(function(){
	  var sticky = jQuery('header.header'),
		  scroll = jQuery(window).scrollTop();

	  if (scroll >= 100) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
	
	jQuery("#mainslider").slick({
		dots: true,
		arrows: true,
		infinite: true,
		prevArrow: '<i class="fa fa-angle-left"></i>',
		nextArrow: '<i class="fa fa-angle-right"></i>',
		autoplay: true,
		autoplaySpeed: 7000,
		centerMode: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 800,
			  settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 667,
			  settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 1
			  }
			}
		  ]
	  });

	jQuery(".news .mn").slick({
		dots: true,
		arrows: false,
		infinite: true,
		centerMode: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 800,
			  settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 667,
			  settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 1
			  }
			}
		  ]
	  });

	jQuery("#testimonials").slick({
		dots: true,
		arrows: false,
		infinite: true,
		centerMode: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		  responsive: [
			{
			  breakpoint: 800,
			  settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 667,
			  settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 1
			  }
			}
		  ]
	  });
});

//toggle menu
function openNav() {
	$('#opensidemenu').toggleClass('change');
	$('#mySidenav').toggleClass('toggle');
}

//revolution slider
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


$(document).ready(function() {
  $('ul#portfolio').before('<ul id="filter"><li>FILTER BY</li><li class="current"><a href="#">All</a></li><li><a href="#">Design</a></li><li><a href="#">Development</a></li><li><a href="#">CMS</a></li><li><a href="#">Integration</a></li></ul><div class="clearfix"></div>');
});
$(document).ready(function() {
  $('ul#filter a').click(function() {
    $(this).css('outline','none');
    $('ul#filter .current').removeClass('current');
    $(this).parent().addClass('current');
    
    var filterVal = $(this).text().toLowerCase().replace(' ','-');
        
    if(filterVal == 'all') {
      $('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
    } else {
      $('ul#portfolio li').each(function() {
        if(!$(this).hasClass(filterVal)) {
          $(this).fadeOut('normal').addClass('hidden');
        } else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    }
    
    return false;
  });
});


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
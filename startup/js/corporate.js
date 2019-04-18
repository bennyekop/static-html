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

	  if (scroll >= 100) { sticky.addClass('fixed'); }
	  else { sticky.removeClass('fixed'); }
	});

	jQuery('#otherpeoplesaying').slick({
		dots: true,
		arrows: false,
		infinite: true,
	  centerMode: true,
	  slidesToShow: 3,
		slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
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

//portfolio script
$(document).ready(function() {
  $('ul#portfolio').before('<ul id="filter"><li>FILTER BY</li><li class="current"><a href="#">All</a></li><li><a href="#">Design</a></li><li><a href="#">Development</a></li><li><a href="#">CMS</a></li><li><a href="#">Integration</a></li></ul><div class="clear"></div>');
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
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

//toggle menu
function openNav() {
	$('#opensidemenu').toggleClass('change');
	$('#mySidenav').toggleClass('toggle');
}

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




//logo slider

$(document).ready(function(){

$('#logoslider').carousel({ interval: 3000 });

$('.carousel-showmanymoveone .item').each(function(){
var itemToClone = $(this);

for (var i=1;i<6;i++) {
itemToClone = itemToClone.next();

if (!itemToClone.length) {
itemToClone = $(this).siblings(':first');
}

itemToClone.children(':first-child').clone()
.addClass("cloneditem-"+(i))
.appendTo($(this));
}
});
});
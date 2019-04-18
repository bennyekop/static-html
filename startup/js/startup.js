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
	    slidesToShow: 1,
	    slidesToScroll: 1
	  });
});


//toggle menu
function openNav() {
	$('#opensidemenu').toggleClass('change');
	$('#mySidenav').toggleClass('toggle');
}

//circle progress
function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}

$(window).on('scroll', function() {
  if (isScrolledIntoView(document.getElementById('maindiv2'))) {
  	$('.one.circle').circleProgress({
	    startAngle: -Math.PI / 4 * 3,
	    value: 0.6,
	    lineCap: 'round',
	    size: '200',
	    thickness: '10',
	    fill: {color: '#31d093'}
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
	  });
  	$('.two.circle').circleProgress({
	    startAngle: -Math.PI / 4 * 3,
	    value: 0.7,
	    lineCap: 'round',
	    size: '200',
	    thickness: '10',
	    fill: {color: '#31d093'}
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
	  });
  	$('.three.circle').circleProgress({
	    startAngle: -Math.PI / 4 * 3,
	    value: 0.8,
	    lineCap: 'round',
	    size: '200',
	    thickness: '10',
	    fill: {color: '#31d093'}
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
	  });
  	$('.four.circle').circleProgress({
	    startAngle: -Math.PI / 4 * 3,
	    value: 0.9,
	    lineCap: 'round',
	    size: '200',
	    thickness: '10',
	    fill: {color: '#31d093'}
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
	  });
  	$('.five.circle').circleProgress({
	    startAngle: -Math.PI / 4 * 3,
	    value: 1.0,
	    lineCap: 'round',
	    size: '200',
	    thickness: '10',
	    fill: {color: '#31d093'}
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
	  });

    // Unbind scroll event
   // $(window).off('scroll');
  }
});



//light slider
$(document).ready(function(){
	$('#lightSlider').lightSlider({
	    gallery:true,
        item:1,
        loop:true,
        thumbItem:9,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left'
	});
});


//logo slider
$(document).ready(function(){

	$('#myCarousel').carousel({
	  interval: 3000
	})

	$('.carousel .item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
	    next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));
	  
	  for (var i=0;i<4;i++) {
	    next=next.next();
	    if (!next.length) {
	    	next = $(this).siblings(':first');
	  	}
	    
	    next.children(':first-child').clone().appendTo($(this));
	  }
	});

}); 
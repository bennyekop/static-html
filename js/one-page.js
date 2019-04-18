//wow script init
new WOW().init();

//slick and target smooth scrolling
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

  if (scroll >= 100) { sticky.addClass('fixed'); $('#opensidemenu').addClass('fixed'); }
  else { sticky.removeClass('fixed'); $('#opensidemenu').removeClass('fixed'); }
});


	$(".news .mn").slick({
	    dots: true,
		arrows: false,
	    infinite: true,
	    autoplay: true,
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

	$("#testimonials").slick({
	    dots: true,
		arrows: false,
	    infinite: true,
	    autoplay: true,
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


//revolution slider script
var revapi;
$(document).ready(function() {
   revapi = $('.tp-banner').revolution(
	{
		delay:9000,
		startwidth:1170,
		startheight:650,
		hideThumbs:10,
		fullWidth:"on",
		forceFullWidth:"on"
	});
});	//ready


//countTo script
function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}

$(window).on('scroll', function() {
  if (isScrolledIntoView(document.getElementById('maindiv_count1'))) {
    $('.count').countTo(); 
  }
  if (isScrolledIntoView(document.getElementById('maindiv_count2'))) {
    $('.count').countTo(); 
  }
  if (isScrolledIntoView(document.getElementById('maindiv_count3'))) {
    $('.count').countTo(); 
  }
  if (isScrolledIntoView(document.getElementById('maindiv_count4'))) {
    $('.count').countTo(); 
  }
});


//circle progress
$(window).on('scroll', function() {
	if (isScrolledIntoView(document.getElementById('maindiv2'))) {
		$('.one.circle').circleProgress({
	    startAngle: -Math.PI / 4 * 3,
	    value: 0.6,
	    lineCap: 'round',
	    size: '150',
	    thickness: '10',
	    fill: {color: '#56bdbd'}
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
	  });
		$('.two.circle').circleProgress({
	    startAngle: -Math.PI / 4 * 3,
	    value: 0.7,
	    lineCap: 'round',
	    size: '150',
	    thickness: '10',
	    fill: {color: '#56bdbd'}
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
	  });
		$('.three.circle').circleProgress({
	    startAngle: -Math.PI / 4 * 3,
	    value: 0.8,
	    lineCap: 'round',
	    size: '150',
	    thickness: '10',
	    fill: {color: '#56bdbd'}
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
	  });
		$('.four.circle').circleProgress({
	    startAngle: -Math.PI / 4 * 3,
	    value: 0.9,
	    lineCap: 'round',
	    size: '150',
	    thickness: '10',
	    fill: {color: '#56bdbd'}
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
	  });
		$('.five.circle').circleProgress({
	    startAngle: -Math.PI / 4 * 3,
	    value: 1.0,
	    lineCap: 'round',
	    size: '150',
	    thickness: '10',
	    fill: {color: '#56bdbd'}
	  }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
	  });

	// Unbind scroll event
	$(window).off('scroll');
	}
});


//portfolio script
$(document).ready(function() {
  $('ul#portfolio1').before('<ul id="filter"><li>FILTER BY</li><li class="current"><a href="#">All</a></li><li><a href="#">Design</a></li><li><a href="#">Development</a></li><li><a href="#">CMS</a></li><li><a href="#">Integration</a></li></ul><div class="clear"></div>');
});
$(document).ready(function() {
  $('ul#filter a').click(function() {
    $(this).css('outline','none');
    $('ul#filter .current').removeClass('current');
    $(this).parent().addClass('current');
    
    var filterVal = $(this).text().toLowerCase().replace(' ','-');
        
    if(filterVal == 'all') {
      $('ul#portfolio1 li.hidden').fadeIn('slow').removeClass('hidden');
    } else {
      $('ul#portfolio1 li').each(function() {
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


//preloader script
var myVar;
function myFunction() {
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
  //document.getElementById("loader_div").style.display = "none";
}
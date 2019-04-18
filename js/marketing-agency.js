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

jQuery("#testimonials").slick({
    dots: true,
	arrows: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 800,
		  settings: {
			arrows: false,
			centerMode: false,
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
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

//slider
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


//pricing table
$(function() {
    $(".price:not(.monthly)").hide();
    $(":radio[name=view]").change(function() {
        $(".price").hide();
        $("label").removeClass("checked");
        $(".price." + this.id).show();
        $("label[for='"+this.id+"']").addClass("checked");
    });

    $(".cur:not(.usd)").hide();
    $("#currency").change(function() {
        $(".cur").hide();
        var currr = $(this).val();
        $(".cur." + currr).show();
    });
});
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

	jQuery("#client_logos").slick({
	    dots: false,
		arrows: false,
	    infinite: true,
	    centerMode: false,
	    slidesToShow: 6,
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
/*SLICK*/
$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 500,
				settings: {
					autoplay: false,
				}
			},
		]
	});
});
/*==========*/

/*BURGER*/
$('.header__menu-icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header__menu').toggleClass('active');
	$('body').toggleClass('lock');
});

$('.header__menu-link').click(function (event) {
	$('body').removeClass('lock');
	$('.header__menu').removeClass('active');
	$('.header__menu-icon').removeClass('active');
});

/*=========*/
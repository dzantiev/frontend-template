import Swiper from 'swiper/bundle';

"use strict";
o2.initSlider = function ()
{
	$('.g-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 3,
		prevArrow: '<div class="prev-arrow"></div>',
		nextArrow: '<div class="next-arrow"></div>'
	});
	// const mySwiper = new Swiper('.swiper', {
	// 	loop: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},
	// });
};

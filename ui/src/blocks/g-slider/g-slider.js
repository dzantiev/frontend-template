import Swiper, { Navigation, Pagination } from 'swiper';

"use strict";
o2.initSlider = function ()
{
	// $('.g-slider').slick({
	// 	infinite: true,
	// 	slidesToShow: 5,
	// 	slidesToScroll: 3,
	// 	prevArrow: '<div class="prev-arrow"></div>',
	// 	nextArrow: '<div class="next-arrow"></div>'
	// });

	const slidesCount = document.querySelectorAll('.swiper .swiper-slide').length;

	const mySwiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination],
		loop: true,
		loopedSlides: slidesCount,
		loopFillGroupWithBlank: true,
		slidesPerView: 5,
		slidesPerGroup: 3,
		spaceBetween: 37,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

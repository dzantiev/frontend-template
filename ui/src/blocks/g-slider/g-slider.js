import Swiper, { Navigation, Pagination } from 'swiper';

"use strict";
o2.initSlider = function ()
{
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

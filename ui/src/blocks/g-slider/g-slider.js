import Swiper, { Navigation, Pagination } from 'swiper';

"use strict";
o2.initSlider = function ()
{
	const mySwiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination],
		loop: true,
		slidesPerView: 4,
		slidesPerGroup: 2,
		spaceBetween: 37,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
};

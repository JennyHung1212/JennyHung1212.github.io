import $ from "jquery";
window.$ = window.jQuery = $;

import Swiper from "swiper";

export function swiper() {
	$(document).ready(function () {

	  var mySwiper = new Swiper ('.swiper-container', {
	    slidesPerView: 'auto',
		  spaceBetween: 10,
		  navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  },
		  loop: true,
		})
	});
};


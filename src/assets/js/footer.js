import $ from "jquery";
window.$ = window.jQuery = $;

export function progress_bar() {
	$(window).on("load", () => {
		$(".invisible-scrollbar").scroll(function() {
			let contentScrollTop = $(this).scrollTop();
			console.log("scrollTop: "+contentScrollTop);
			let height = $(this).children(".scrolled").height() - ($(".row").height() - 50); 
			console.log("height: "+height);
			let scrolled = (contentScrollTop / height) * 100;
			$(".footer-container__progress--bar").css("width", scrolled+"%");
		});
	});
};
import $ from "jquery";
window.$ = window.jQuery = $;

export function left_toggle() {
	$(window).on("load", () => {
		$('#toggle').click(function() {
	   	$(this).toggleClass('active');
	   	$('.sidebar-left-mobile').toggleClass('open');
	  });
	});
};
import $ from "jquery";
window.$ = window.jQuery = $;

export function left_toggle() {
	$(window).on("load", () => {
		$('#toggle1').click(function() {
	   	$(this).toggleClass('active');
	   	$('.sidebar-left-mobile').toggleClass('open');
	  });

	  $('#toggle2').click(function() {
	   	$(this).toggleClass('active');
	   	$('.sidebar-right-mobile').toggleClass('open');
	  });
	});
};
import $ from "jquery";
window.$ = window.jQuery = $;

function select_week(week, content, weeks, contents) {
	$('#toggle').removeClass("active");
	$('.sidebar-left-mobile').removeClass('open');

	week.removeClass("not-selected");
	week.addClass("selected");
	content.css("display", "block");
	content.removeClass("not-scrolled");
	content.addClass("scrolled");
	$(".invisible-scrollbar").scrollTop(0);
	$(document).scrollTop(0);

	for(let i = 0; i < weeks.length; i++) {
		weeks[i].removeClass("selected");
		weeks[i].addClass("not-selected");
		contents[i].css("display", "none");
		contents[i].removeClass("scrolled");
		contents[i].addClass("not-scrolled");
	}
}

export function left_menu() {
	$(window).on("load", () => {
		let week01 = $(".sg-week-01");
		let content01 = $("#sg-week-01");
		let week02 = $(".sg-week-02");
		let content02 = $("#sg-week-02");
		let week03 = $(".sg-week-03");
		let content03 = $("#sg-week-03");
		let week04 = $(".sg-week-04");
		let content04 = $("#sg-week-04");

		week01.click(function(){
			select_week(week01, content01, [week02, week03, week04], [content02, content03, content04]);
		});

		week02.click(function(){
			select_week(week02, content02, [week01, week03, week04], [content01, content03, content04]);
		});

		week03.click(function(){
			select_week(week03, content03, [week01, week02, week04], [content01, content02, content04]);
		});

		week04.click(function(){
			select_week(week04, content04, [week01, week02, week03], [content01, content02, content03]);
		});
	});
};


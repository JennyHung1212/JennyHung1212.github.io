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
		let week05 = $(".sg-week-05");
		let content05 = $("#sg-week-05");
		let week06 = $(".sg-week-06");
		let content06 = $("#sg-week-06");
		let week07 = $(".sg-week-07");
		let content07 = $("#sg-week-07");
		let week08 = $(".sg-week-08");
		let content08 = $("#sg-week-08");

		week01.click(function(){
			select_week(week01, content01, [week02, week03, week04, week05, week06, week07, week08], [content02, content03, content04, content05, content06, content07, content08]);
		});

		week02.click(function(){
			select_week(week02, content02, [week01, week03, week04, week05, week06, week07, week08], [content01, content03, content04, content05, content06, content07, content08]);
		});

		week03.click(function(){
			select_week(week03, content03, [week01, week02, week04, week05, week06, week07, week08], [content01, content02, content04, content05, content06, content07, content08]);
		});

		week04.click(function(){
			select_week(week04, content04, [week01, week02, week03, week05, week06, week07, week08], [content01, content02, content03, content05, content06, content07, content08]);
		});

		week05.click(function(){
			select_week(week05, content05, [week01, week02, week03, week04, week06, week07, week08], [content01, content02, content03, content04, content06, content07, content08]);
		});

		week06.click(function(){
			select_week(week06, content06, [week01, week02, week03, week04, week05, week07, week08], [content01, content02, content03, content04, content05, content07, content08]);
		});

		week07.click(function(){
			select_week(week07, content07, [week01, week02, week03, week04, week05, week06, week08], [content01, content02, content03, content04, content05, content06, content08]);
		});

		week08.click(function(){
			select_week(week08, content08, [week01, week02, week03, week04, week05, week06, week07], [content01, content02, content03, content04, content05, content06, content07]);
		});
	});
};


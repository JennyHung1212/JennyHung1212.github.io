import $ from "jquery";
window.$ = window.jQuery = $;

function select_week(week, content, weeks, contents) {
	$('#toggle1').removeClass("active");
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
		let week09 = $(".sg-week-09");
		let content09 = $("#sg-week-09");
		let week10 = $(".sg-week-10");
		let content10 = $("#sg-week-10");
		let week11 = $(".sg-week-11");
		let content11 = $("#sg-week-11");
		let week12 = $(".sg-week-12");
		let content12 = $("#sg-week-12");
		let week13 = $(".sg-week-13");
		let content13 = $("#sg-week-13");
		let week14 = $(".sg-week-14");
		let content14 = $("#sg-week-14");
		let week15 = $(".sg-week-15");
		let content15 = $("#sg-week-15");


		week01.click(function(){
			select_week(week01, content01, [week02, week03, week04, week05, week06, week07, week08, week09, week10, week11, week12, week13, week14, week15], [content02, content03, content04, content05, content06, content07, content08, content09, content10, content11, content12, content13, content14, content15]);
		});

		week02.click(function(){
			select_week(week02, content02, [week01, week03, week04, week05, week06, week07, week08, week09, week10, week11, week12, week13, week14, week15], [content01, content03, content04, content05, content06, content07, content08, content09, content10, content11, content12, content13, content14, content15]);
		});

		week03.click(function(){
			select_week(week03, content03, [week01, week02, week04, week05, week06, week07, week08, week09, week10, week11, week12, week13, week14, week15], [content01, content02, content04, content05, content06, content07, content08, content09, content10, content11, content12, content13, content14, content15]);
		});

		week04.click(function(){
			select_week(week04, content04, [week01, week02, week03, week05, week06, week07, week08, week09, week10, week11, week12, week13, week14, week15], [content01, content02, content03, content05, content06, content07, content08, content09, content10, content11, content12, content13, content14, content15]);
		});

		week05.click(function(){
			select_week(week05, content05, [week01, week02, week03, week04, week06, week07, week08, week09, week10, week11, week12, week13, week14, week15], [content01, content02, content03, content04, content06, content07, content08, content09, content10, content11, content12, content13, content14, content15]);
		});

		week06.click(function(){
			select_week(week06, content06, [week01, week02, week03, week04, week05, week07, week08, week09, week10, week11, week12, week13, week14, week15], [content01, content02, content03, content04, content05, content07, content08, content09, content10, content11, content12, content13, content14, content15]);
		});

		week07.click(function(){
			select_week(week07, content07, [week01, week02, week03, week04, week05, week06, week08, week09, week10, week11, week12, week13, week14, week15], [content01, content02, content03, content04, content05, content06, content08, content09, content10, content11, content12, content13, content14, content15]);
		});

		week08.click(function(){
			select_week(week08, content08, [week01, week02, week03, week04, week05, week06, week07, week09, week10, week11, week12, week13, week14, week15], [content01, content02, content03, content04, content05, content06, content07, content09, content10, content11, content12, content13, content14, content15]);
		});

		week09.click(function(){
			select_week(week09, content09, [week01, week02, week03, week04, week05, week06, week07, week08, week10, week11, week12, week13, week14, week15], [content01, content02, content03, content04, content05, content06, content07, content08, content10, content11, content12, content13, content14, content15]);
		});

		week10.click(function(){
			select_week(week10, content10, [week01, week02, week03, week04, week05, week06, week07, week08, week09, week11, week12, week13, week14, week15], [content01, content02, content03, content04, content05, content06, content07, content08, content09, content11, content12, content13, content14, content15]);
		});

		week11.click(function(){
			select_week(week11, content11, [week01, week02, week03, week04, week05, week06, week07, week08, week09, week10, week12, week13, week14, week15], [content01, content02, content03, content04, content05, content06, content07, content08, content09, content10, content12, content13, content14, content15]);
		});

		week12.click(function(){
			select_week(week12, content12, [week01, week02, week03, week04, week05, week06, week07, week08, week09, week10, week11, week13, week14, week15], [content01, content02, content03, content04, content05, content06, content07, content08, content09, content10, content11, content13, content14, content15]);
		});

		week13.click(function(){
			select_week(week13, content13, [week01, week02, week03, week04, week05, week06, week07, week08, week09, week10, week11, week12, week14, week15], [content01, content02, content03, content04, content05, content06, content07, content08, content09, content10, content11, content12, content14, content15]);
		});

		week14.click(function(){
			select_week(week14, content14, [week01, week02, week03, week04, week05, week06, week07, week08, week09, week10, week11, week12, week13, week15], [content01, content02, content03, content04, content05, content06, content07, content08, content09, content10, content11, content12, content13, content15]);
		});

		week15.click(function(){
			select_week(week15, content15, [week01, week02, week03, week04, week05, week06, week07, week08, week09, week10, week11, week12, week13, week14], [content01, content02, content03, content04, content05, content06, content07, content08, content09, content10, content11, content12, content13, content14]);
		});
	});
};


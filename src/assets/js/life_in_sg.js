import $ from "jquery";
window.$ = window.jQuery = $;

function select_week(week, content, weeks, contents) {
	week.removeClass("not-selected");
	week.addClass("selected");
	content.css("display", "block");
	$(".invisible-scrollbar").scrollTop(0);

	for(let i = 0; i < weeks.length; i++) {
		weeks[i].removeClass("selected");
		weeks[i].addClass("not-selected");
		contents[i].css("display", "none");
	}
}

export function left_menu() {
	$(window).on("load", () => {
		let week01 = $(".sg-week-01");
		let content01 = $("#sg-week-01");
		let week02 = $(".sg-week-02");
		let content02 = $("#sg-week-02");

		week01.click(function(){
			select_week(week01, content01, [week02], [content02]);
		});

		week02.click(function(){
			select_week(week02, content02, [week01], [content01]);
		});
	});
};


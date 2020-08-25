import $ from "jquery";
window.$ = window.jQuery = $;

export function progress_bar() {
  $(window).on("load", () => {
    $(".invisible-scrollbar").scroll(function() {
      let contentScrollTop = $(this).scrollTop();
      let height =
        $(this)
          .children(".content")
          .height() -
        ($(".ant-row").height() - 50);
      let scrolled = (contentScrollTop / height) * 100;
      $(".footer-container__progress--bar").css("width", scrolled + "%");
    });
  });
}

export function scroll_top() {
  $(window).on("load", () => {
    $(".invisible-scrollbar").scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".footer-container__top").fadeIn();
      } else {
        $(".footer-container__top").fadeOut();
      }
    });

    $(".footer-container__top").click(function() {
      $(".invisible-scrollbar").animate(
        {
          scrollTop: 0,
        },
        600
      );
    });
  });
}

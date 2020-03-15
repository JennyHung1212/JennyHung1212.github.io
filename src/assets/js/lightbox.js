import $ from "jquery";
window.$ = window.jQuery = $;

export function img_lightbox() {
  $(window).on("load", () => {
    $(".img_lightbox").each(function() {
      let img_src = $(this)
        .find("img")
        .attr("src");
      $(this)
        .find("a")
        .attr("href", img_src);
    });
  });
}

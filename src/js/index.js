$(document).ready(function () {
  $("#open-sidebar").on("click", function () {
    $(".header-right").addClass("active");
  });

  $("#close-sidebar").on("click", function () {
    $(".header-right").removeClass("active");
  });

  if (innerWidth <= 991) {
    $(".footer_top-box h5").on("click", function () {
      // Close all other open ULs
      $(".footer_top-box h5")
        .not(this)
        .removeClass("active")
        .next("ul")
        .slideUp();

      // Toggle the current UL
      $(this).toggleClass("active").next("ul").slideToggle();
    });
  }
});

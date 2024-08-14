$(document).ready(function () {
  $(".btn-close").css("display", "none");

  $(".hamburger-icon").on("click", function () {
    $(".header-right").addClass("active");
    $(".hamburger-icon").css("display", "none");
    $(".btn-close").css("display", "block");
  });

  $(".btn-close").on("click", function () {
    $(".header-right").removeClass("active");
    $(".hamburger-icon").css("display", "block");
    $(".btn-close").css("display", "none");
  });

  if (innerWidth <= 991) {
    $(".footer__top-box h5").on("click", function () {
      // Close all other open ULs
      $(".footer__top-box h5")
        .not(this)
        .removeClass("active")
        .next("ul")
        .slideUp();

      // Toggle the current UL
      $(this).toggleClass("active").next("ul").slideToggle();
    });
  }

  // owl carausal jquery
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
       
      },
    },
  });
});

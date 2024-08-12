$(document).ready(function() {
  $('#open-sidebar').on('click', function() {
    $('.header-right').addClass('active');
  });

  $('#close-sidebar').on('click', function() {
    $('.header-right').removeClass('active');
  });
});

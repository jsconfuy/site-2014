(function ($) {
  'use strict';

  $(document).on('ready', function () {
    $('.talk-summary, .workshop-summary').hide();
  });

  $('.talk').hover(function (event) {
    if ($(this).not('clicked'))
      $(this).find('.talk-summary').slideToggle();
  });

  $('.talk').click(function (event) {
    if ($(this).is('clicked')) {
      $(this).find('.talk-summary').slideToggle();
    }
    $(this).toggleClass('clicked');
  });

  $('.workshop').hover(function (event) {
    $(this).toggleClass('active');
    $(this).find('.workshop-summary').slideToggle();
  });

}(jQuery));

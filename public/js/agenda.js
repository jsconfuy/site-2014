(function ($) {
  'use strict';

  $.fn.toggleText = function (a, b) {
    if (this.text() === a) {
      this.text(b);
    } else {
      this.text(a);
    }
    return this;
  };

  $(document).on('ready', function () {
    $('.talk-summary, .workshop-summary').hide();

    $('.talk').each(function () {
      if ($(this).children('.talk-summary').length > 0) {
        var btn = $('<a />').attr('href', '#').addClass('more-info').text('More information...');
        btn = $('<small />').append(btn);
        $(this).append(btn);
      }
    });
  });

  $(document).on('click', '.talk .more-info', function (event) {
    var $parent = $(this).parent().parent('.talk');
    event.preventDefault();
    $parent.find('.talk-summary').slideToggle();
    $(this).toggleText('More information...', 'Close');
  });

}(jQuery));

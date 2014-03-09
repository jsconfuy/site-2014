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
        var $btn, $h3;

        $btn = $('<a />').attr('href', '#');
        $btn.attr('title', 'More information...');
        $btn.addClass('more-info').text('+');

        $h3 = $(this).find('h3');
        $h3.text($h3.text() + ' ').append($btn);
      }
    });
  });

  $(document).on('click', '.talk .more-info', function (event) {
    var $parent = $(this).parent().parent('.talk');
    event.preventDefault();
    $parent.find('.talk-summary').slideToggle();
    $(this).toggleText('+', '-');
  });

}(jQuery));

(function(){
  var slides = $('.slider .slides')
  .on('fotorama:show', function(e, fotorama, extra) {
    $('.slider .thumbs li').removeClass('active').eq(fotorama.activeIndex).addClass('active');
  }).fotorama({
    width: '100%',
    height: '100%',
    keyboard: true,
    arrows: true,
    click: true,
    swipe: true,
    margin: 0,
    fit: 'cover',
    nav: false
  }).data('fotorama');

  $('.slider .thumbs li').click(function(e){
    slides.show($(this).index());
  });

  $(document).on('ready', function () {
    var sticky = function () {
      if ($(document).scrollTop() > $('header').offset().top) {
        $('header').addClass('sticky');
      } else {
        $('header').removeClass('sticky');
      }

      if ($(document).scrollTop() > $('.speakers').offset().top - 300) {
        $('.speakers li:not(.active)').each(function (index) {
          var $el = $(this);
          window.setTimeout(function () {
            $el.addClass('active');
          }, index * 100);
        });
      }

      if ($(document).scrollTop() > $('.sponsors').offset().top - 300) {
        $('.sponsors li:not(.active)').each(function (index) {
          $(this).addClass('active');
        });
      }
    };
    $(window).on('resize', sticky);
    $(document).on('scroll', sticky);
  });
})();


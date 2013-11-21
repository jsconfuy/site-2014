(function ($) {
    'use strict';

    var parallaxBannerOffset,
        parallaxImageHeight,
        parallaxBannerZeroPos,
        parWindWidth,
        imgPosLeft,
        parallaxBannerRatio,
        textPosTop,
        imgPosTop,
        documentScroll;

    var calculateParallaxPositions = function () {
        documentScroll = $(document).scrollTop();
        parallaxBannerOffset = $('.parallax_banner_wrapper').offset().top;
        parallaxImageHeight = $('.parallax_banner_wrapper img').height();
        parallaxBannerZeroPos = parallaxBannerOffset - $(window).height() / 2 + $('.parallax_banner_wrapper').height() / 2;
        parWindWidth = $(window).width();
        imgPosLeft = -((1920 - parWindWidth) / 2);
        
        parallaxBannerRatio = $(window).height() / $('.parallax_banner_wrapper').height();
        textPosTop = (documentScroll - parallaxBannerZeroPos) / parallaxBannerRatio;
        imgPosTop = ((parallaxBannerZeroPos - documentScroll) / parallaxBannerRatio - parallaxImageHeight / 4) * 0.9;
        
        $('.parallax_banner_wrapper img').css({
            'top': imgPosTop,
            'left': imgPosLeft
        });
        $('.parallax_banner_wrapper .banner_text_wrapper').css({
            'top': textPosTop
        });
        $('.parallax_banner_wrapper .banner_text_inner').css({
            'font-size': (parWindWidth / 18) + 'px',
            'line-height': (parWindWidth / 18) + 4 + 'px'
        });
    };

    $(document).on('ready', function () {
        var containerWidth = $('.container').width();

        $('.chr_slider').fotorama({
            cropToFit: true,
            transitionDuration: 500,
            zoomToFit: false,
            fitToWindowHeight: true,
            fitToWindowHeightMargin: 0,
            caption: 'overlay',
            nav: 'dots',
            onShowImg: function (data) {
                $('.fotorama-nav-wrap-custom .nav-thumb-wrap').eq(data.index).trigger('click');
                var $captionWidth = $('.fotorama__caption.fotorama__caption_overlay').width() / 2 + 48;
                $('.fotorama__caption.fotorama__caption_overlay').css({'margin-left' : -$captionWidth});
            }
        });
        /* parallax_banner */
        calculateParallaxPositions();

        /* port-hex responsive */
        if (containerWidth < 1140) {
            $('.hexagon-in2.seventh-element').parent().parent().addClass('hex-offset');
        } else if (containerWidth < 940) {
            $('.hexagon-in2.seventh-element').parent().parent().removeClass('hex-offset');
            $('.hexagon-in2.fifth-element').parent().parent().addClass('hex-offset');
        } else if (containerWidth < 720) {
            $('.hexagon-in2.third-element').parent().parent().addClass('hex-offset');
            $('.hexagon-in2.seventh-element').parent().parent().addClass('hex-offset');
        }
    });

    $(window).on('resize', function () {
        /* port-hex responsive */
        var containerWidth = $('.container').width();

        if (containerWidth < 1140) {
            $('.hexagon-in2.seventh-element').parent().parent().addClass('hex-offset');
        } else if (containerWidth < 940) {
            $('.hexagon-in2.seventh-element').parent().parent().removeClass('hex-offset');
            $('.hexagon-in2.fifth-element').parent().parent().addClass('hex-offset');
        } else if (containerWidth < 720) {
            $('.hexagon-in2.third-element').parent().parent().addClass('hex-offset');
            $('.hexagon-in2.seventh-element').parent().parent().addClass('hex-offset');
        }

        /* parallax_banner */
        calculateParallaxPositions();
    });

    $(document).on('scroll', function () {
        /* parallax_banner */
        calculateParallaxPositions();
        var textFadeParameter = 1 - Math.abs((documentScroll - parallaxBannerZeroPos) * 3.2 / $(window).height() / 2);
        $('.parallax_banner_wrapper').find('.banner_text_wrapper').css({
            'top': textPosTop,
            'opacity': textFadeParameter
        });
    });

}(jQuery));

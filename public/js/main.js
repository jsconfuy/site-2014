(function ($) {
    'use strict';

    var parallaxBannerOffset,
        parallaxImageHeight,
        parallaxBannerZeroPos,
        parWindWidth,
        windowHeight,
        imgPosLeft,
        parallaxBannerRatio,
        textPosTop,
        imgPosTop,
        documentScroll,
        headerGutter;

    var calculateParallaxPositions = function () {
        var banner = $('.parallax_banner_wrapper');
        if(!banner.length) return;
        
        parallaxBannerOffset = banner.offset().top;
        var images = banner.find('img');
        parallaxImageHeight = images.height();
        parallaxBannerZeroPos = parallaxBannerOffset - windowHeight / 2 + banner.height() / 2;
        imgPosLeft = -((1920 - parWindWidth) / 2);
        
        parallaxBannerRatio = windowHeight / banner.height();
        textPosTop = (documentScroll - parallaxBannerZeroPos) / parallaxBannerRatio;
        imgPosTop = ((parallaxBannerZeroPos - documentScroll) / parallaxBannerRatio - parallaxImageHeight / 4) * 0.9;
        
        images.css({
            'top': imgPosTop,
            'left': imgPosLeft
        });

        banner.find('.banner_text_wrapper').css({
            'top': textPosTop
        });

        banner.find('.banner_text_inner').css({
            'font-size': (parWindWidth / 18) + 'px',
            'line-height': (parWindWidth / 18) + 4 + 'px'
        });
    };

    var chronosStiky = function () {
        if (parWindWidth > 1200 && documentScroll > $('#index').height()) {
            $('.navigation-tab').addClass('sticky');
        } else {
            $('.navigation-tab').removeClass('sticky');
        }

        //$('.navigation-panel a[href*=#]').each(function () {
        //    var $offsetElement = $($(this).attr('href')),
        //        offsetTop = $offsetElement.offset().top - headerGutter;
        //    if ((offsetTop >= documentScroll && offsetTop <= documentScroll + 1 / 2 * windowHeight) || (offsetTop + $offsetElement.height() >= $(window).width() + 1 / 2 * windowHeight && offsetTop + $offsetElement.height() <= $(window).width() + windowHeight)) {
        //        $('.navigation-panel li.active').removeClass('active');
        //        $(this).parent().addClass('active');
        //    }
        //});
    };

    $(document).on('ready', function () {
        parWindWidth = $(window).width();
        windowHeight = $(window).height();
        documentScroll = $(document).scrollTop();
        headerGutter = $('.navigation-tab').height() - 1;
        
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
                var captionWidth = $('.fotorama__caption.fotorama__caption_overlay').width() / 2 + 48;
                $('.fotorama__caption.fotorama__caption_overlay').css({
                    'margin-left': -captionWidth
                });
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

        /* header */
        $('.navigation-panel').each(function () {
            var $this = $(this);
            var html = '';
            html += '<div class="clearfix"></div><select class="responsive_nav">';
            html += '<option value="">Go To...</option>';
            
            $this.find('a').each(function () {
                var $parent = $(this);
                html += '<option value="' + $(this).attr('href') + '">';
                
                while (!$parent.hasClass('navigation-panel')) {
                    if($parent.get(0).tagName === 'ul'){
                        html += '&nbsp;&nbsp;';
                    }
                    $parent = $parent.parent();
                }
                html += $(this).html() + '</option>';
            });
            html += '</select>';
            $(html).insertAfter($this);
        });
    });

    $(window).on('resize', function () {
        parWindWidth = $(window).width();
        windowHeight = $(window).height();
        documentScroll = $(document).scrollTop();
        
        /* header */
        chronosStiky();
        
        $('.image-text').css({
            'bottom': - $('.image-text').height() + 48
        });

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
        documentScroll = $(document).scrollTop();
        
        /* header */
        chronosStiky();
        
        /* parallax_banner */
        calculateParallaxPositions();
        var textFadeParameter = 1 - Math.abs((documentScroll - parallaxBannerZeroPos) * 3.2 / windowHeight / 2);
        $('.parallax_banner_wrapper').find('.banner_text_wrapper').css({
            'top': textPosTop,
            'opacity': textFadeParameter
        });
    });

    $('.navigation-panel a[href*=#]').on('click', function (event) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var targetOffset, $target = $(this.hash);
            event.preventDefault();
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            
            if ($target.length) {
                targetOffset = $target.offset().top;
                $('html, body').stop(true).animate({
                    scrollTop: targetOffset - headerGutter
                }, 1000, 'easeInOutQuart');
            }
        }
    });

    $(document).on('mouseenter', '.square-portfolio a', function () {
        $(this).find('.image-text, .image-double').stop(true).animate({
            'bottom': 0
        }, 300);
        $(this).find('.image-static').stop(true).animate({
            'top': - $(this).height()
        }, 300);
    });

    $(document).on('mouseleave', '.square-portfolio a', function () {
        $(this).find('.image-double').stop(true).animate({
            'bottom': '-100%'
        }, 300);
        $(this).find('.image-text').stop(true).animate({
            'bottom': - $(this).find('.image-text').outerHeight()
        }, 300);
        $(this).find('.image-static').stop(true).animate({
            'top': 0
        }, 300);
    });

    $(document).on('change', '.responsive_nav', function () {
        window.location.href = $(this).val();
    });

}(jQuery));

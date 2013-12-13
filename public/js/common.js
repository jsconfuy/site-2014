(function($){
	/*  Prevent Default - Default for all links  */
	$(document).on('click', 'a', function(e){
		if($(this).attr('href').length < 2)
		e.preventDefault();
	});	
	/* FORM */
$(document).ready(function(){
	$('form').each(function(){
		$(this).find('input,textarea').focus(function(){
			if($(this).attr('data-value')==$(this).val()){
				$(this).val('');
			}	
		});
		$(this).find('input,textarea').focusout(function(){
			if($(this).val() == ''){
				$(this).val($(this).attr('data-value'));
			}	
		});
		$(this).find('button.btn').click(function(e){
			e.preventDefault();
			var $parent=$(this);
			while($parent.get(0).tagName != 'FORM'){
				$parent=$parent.parent();
			}
			var full=true;
			$parent.find('.required').each(function(){
				if($(this).val()=='' || $(this).val()==$(this).attr('data-value')){
					$(this).addClass('empty');
					full=false;
				}
				else{
					$(this).removeClass('empty');
				}
			});
			if(full){
				$parent.submit();
			}
		});
	});

	$('.select-icon i.cp-trigger').click(function(){
		if(parseInt($('.colorpicker-wrapper').css('left')) != 0){
			$(this).parent().parent().stop(true).animate({left : 0},250);
			$(this).addClass('cp-open');
		}
		else{
			$(this).parent().parent().stop(true).animate({left : '-200px'},250);
			$(this).removeClass('cp-open');
		}
	});
	
	$('.cp-select-list li a').click(function(){
		var $cpColor = $(this).attr('class');
		$('.colorpicker-wrapper').parent().attr('class', $cpColor);
	});

	
	/*  Fotorama Custom Thumbs  */
	var $elementWidth = $('.nav-thumb-wrap').outerWidth();
	var $wrapperWidth = $('.fotorama-nav-wrap-custom').css({'width' : $elementWidth * 3});
	var $thumbsHeight = $('.nav-thumb-wrap').css('height');
	$('.fotorama-nav-wrap-custom').css({'height' : $thumbsHeight});
	
	$('.nav-thumb-wrap').each(function(index){
		$(this).click(function(e){
			if($(this).hasClass('top-element')) {e.preventDefault();}
			$('.fotorama__thumbs-shaft > i').eq(index).trigger('click');
			$(this).closest('.fotorama-nav-wrap-custom').find('.active-thumb').removeClass('active-thumb');
			$(this).addClass('active-thumb');

		var $elementWidth = $('.nav-thumb-wrap').width();
		var $wrapperWidth = $('.fotorama-nav-wrap-custom').width();
		var $elementPosition = $(this).index();
		var $totalElements = $('.nav-thumb-wrap').length;
		var $windWidth = $(window).width();
		if($windWidth > 1180){
			if($elementPosition > 0){
				if($totalElements -1 != $elementPosition ){
					$(this).parent().stop(true).animate({left : - (($elementPosition - 1) * $elementWidth)}, 400);
				}
			}
		}
		if($windWidth < 1180){
			$('.fotorama-nav-wrap-custom').show();
			$('.fotorama-nav-wrap-custom').css({'width' : $elementWidth * 2});
			$('.fotorama-nav-wrap-custom').css({'margin-left' : -$elementWidth});
			var $elementPosition = $(this).index();
				if($totalElements - 1 != $elementPosition ){
					$(this).parent().stop(true).animate({left : - ($elementPosition * $elementWidth)}, 400);
				}
		}
		if($windWidth < 800){
			$('.fotorama-nav-wrap-custom').hide();
		}
		

		});			
	});
	
	$(window).resize(function(){
		fotoramaNavReset();
	})
	
	function fotoramaNavReset() {
		var $windWidth = $(window).width();
		var $elementWidth = $('.nav-thumb-wrap:first').width();
		var $this = $('.nav-thumb-wrap.active-thumb');
		var $elementPosition = $('.nav-thumb-wrap.active-thumb').index();
		var $totalElements = $('.nav-thumb-wrap').length;
		if($windWidth > 1180){
			$('.fotorama-nav-wrap-custom').show();
			$('.fotorama-nav-wrap-custom').css({'width' : $elementWidth * 3});
			$('.fotorama-nav-wrap-custom').css({'margin-left' : -1.5*$elementWidth});
			if($elementPosition > 0){
				if($totalElements -1 != $elementPosition ){
					$this.parent().stop(true).css({left : - (($elementPosition - 1) * $elementWidth)});
				}
				else {
					$this.parent().stop(true).css({left : - (($elementPosition - 2) * $elementWidth)});
				}
			}
		}
		if($windWidth < 1180){
			$('.fotorama-nav-wrap-custom').show();
			$('.fotorama-nav-wrap-custom').css({'width' : $elementWidth * 2});
			$('.fotorama-nav-wrap-custom').css({'margin-left' : -$elementWidth});
			if($elementPosition > 0){
				if($totalElements - 1 != $elementPosition ){
					$this.parent().stop(true).css({left : - ($elementPosition * $elementWidth)}, 400);
				}
				else {
					$this.parent().stop(true).css({left : - (($elementPosition-1) * $elementWidth)}, 400);
				}
			}
		}
		if($windWidth < 800){
			$('.fotorama-nav-wrap-custom').hide();
		}
	}
	
//			Comment Form Opening Script - top
	
$('.comment_form_opening_hook').click(function(){
		$('#comment_form_wrapper1').stop(true,true).delay(400).slideDown(300);
	});
	
	$('.comment_form_wrapper .close_button').click(function(e){
		e.preventDefault();
		$(this).closest('.comment_form_wrapper').stop(true).slideUp(300);
	});
	
/*  comment-form - opening on reply  */
$('a.open-form-trigger').click(function(e){
	e.preventDefault();
	var $clonedForm = $('#contact-form').clone();
	var $formHeight = $('#contact-form form').height() + 72;
	
	if(!$(this).closest('.comment-wrap').hasClass('form-opened')){
		$('.form-opened').find('a.close_button').trigger('click');
		$(this).closest('.single_comment').parent().append($clonedForm).find('#contact-form').stop(true).animate({height : $formHeight}, 300, function(){
			$(this).closest('.comment-wrap').addClass('form-opened');
		});
	}
});
$(document).on('click', 'a.close_button', function(){
	$(this).closest('#contact-form').stop(true).animate({height : 0}, 300, function(){
		$(this).remove();
	});
	$('.form-opened').removeClass('form-opened');
});

//		anchor-to-target scrolling

	$('a.scroll_to_target[href^="#"]').on('click',function (e) {
		    e.preventDefault();
		    var target = this.hash,
		    $target = $(target);
		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top - 140
		    }, 900, 'swing', function () {
		  });
	});
	
	$('.social_bar ul li a').hover(function(){
		$(this).find('img.static').stop(true).animate({top : -34}, 100);
		$(this).find('img.dynamic').stop(true).animate({top : 0}, 100);
	},function(){
		$(this).find('img.static').stop(true).animate({top : 0}, 100);
		$(this).find('img.dynamic').stop(true).animate({top : 34}, 100);
	});
	


$('.twitter-post').each(function(){
	var $this = $(this);
	$.get('twitter.php',function(ret){
		$this.html(ret);
	});
});

$('.twitter_module').each(function(){
	var $this = $(this);
	$.get('twitter.php?list=true',function(ret){
		$this.html(ret);
	});
});
	
	
	
});
})(jQuery);
$(document).ready(function(){
	                       
    $('body').on('click','.modal-back, .modal-close' , function(){
        $('.modal-back, .modal, .thx, .modal-calc').fadeOut(500);
    });
    
    $('body').on('click','.jk' , function(){
        $('.modal-back, .modal').fadeIn(500);
    });
    
    // BURGER
    $('body').on('click','.burger' , function(){
        $(this).toggleClass('nav-active');
        $('.navigation').toggleClass('nav-active');
    });
    
    // LINE BLOCK
    $('.work-box__left__circle, .work-box__right__circle').addClass('wow fadeInDown');
    $('.work-box__left__line, .work-box__right__line').addClass('wow aniline');
    
    $('.work-box__left .work-box__shadow, .work-box__left .work-box__title, .work-box__left .work-box__text').addClass('wow fadeInLeft');
    $('.work-box__right .work-box__shadow, .work-box__right .work-box__title, .work-box__right .work-box__text').addClass('wow fadeInRight');
    
    
});


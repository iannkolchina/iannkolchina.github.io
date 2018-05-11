$(document).ready(function(){
    $('.js-show-menu').click(function(){
        $('.wrapper-menu').fadeIn();
        $('body').addClass('hidden-overflow');
        $('html')[0].setAttribute('class', 'hidden-overflow');
    });
});

$(document).ready(function(){
    $('.js-close-menu').click(function(){
        $('.wrapper-menu').fadeOut(0);
        $('body').removeClass('hidden-overflow');
        $('html')[0].removeAttribute('class', 'hidden-overflow');
    });
});

$(document).ready(function(){
    $('.js-hireus').click(function(){
        $('.wrapper-form').fadeIn();
        $('body').addClass('hidden-overflow');
        $('html')[0].setAttribute('class', 'hidden-overflow');
    });
});

$(document).ready(function(){
    $('.btn-close-modal').click(function(){
        $('.wrapper-form').fadeOut(0);
        $('body').removeClass('hidden-overflow');
        $('html')[0].removeAttribute('class', 'hidden-overflow');
    });
});
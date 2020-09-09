$(function(){

    $('.header__menu').on('click', function(e){
        let elem = e.target.classList[1];
        $('html,body').stop().animate({ scrollTop: $('#'+elem).offset().top - 40 }, 2000);
        e.preventDefault();
    });
    
});
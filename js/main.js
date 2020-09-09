window.onload = function()
{
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
    };

    let arrowLeft = document.getElementsByClassName('arrow_left')[0];
    let arrowRight = document.getElementsByClassName('arrow_right')[0];
    let arrowDown = document.getElementsByClassName('arrow_bottom')[0];

    arrowLeft.classList.add("arrow_left_active");
    arrowRight.classList.add("arrow_right_active");
    arrowDown.classList.add("arrow_bottom_active");


    let reasons = document.getElementsByClassName('reasons')[0];
    let buying = document.getElementsByClassName('buying')[0];

    $(".phone").click(function(){
        $(this).setCursorPosition(4);
    }).mask("+7 (999) 999-9999", {autoclear: false});

    window.onscroll = function()
    {   
        if (isVisible(reasons))
        {      
            let arrowCenter = document.getElementsByClassName('reasons__arrow_center')[0];
            arrowCenter.classList.add("reasons__arrow_center_active");

            let title = document.getElementsByClassName('reasons_tittle')[0];
            title.classList.add("reasons_tittle_active");

            let list = document.getElementsByClassName('reasons__list')[0];
            list = list.children
            for (let i = 0; i < list.length; i++)
            {
                list[i].classList.add("reasons__list_item_active");

            }
        }

        if (isVisible(buying))
        {
            let arrow = document.getElementsByClassName('buying_arrow')[0];
            let arrows = arrow.children;
            
            for (let i = 0; i < arrows.length; i++)
            {
                if (arrows[i].classList.length < 2)
                {
                    let classs = arrows[i].className;
                    arrows[i].classList.toggle(classs + '_active');
                }
                
            }

            arrow = document.getElementsByClassName('buying_mainTitle')[0];
            arrow.classList.add('buying_mainTitle_active');

            arrow = document.getElementsByClassName('buying__list')[0];
            arrows = arrow.children;

            for (let i = 0; i < arrows.length; i++)
            {
                if (arrows[i].classList.length < 2)
                {
                    arrows[i].classList.add('buying__item_active');
                }
            }
        }
    }
}
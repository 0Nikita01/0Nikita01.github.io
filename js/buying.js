document.addEventListener("DOMContentLoaded", function(){
    let btn = document.querySelectorAll('.buying__item_button');
    let modal = document.querySelector('.modal');
    let close = document.querySelector('.modal__close');
    let send = document.querySelectorAll('.send');
    for (let i = 0; i < btn.length; i++)
    {
        btn[i].onclick = function(){
            let thanks = document.querySelector('.thanks'),
                data = document.querySelector('.data'),
                oops = document.querySelector('.oops')

            thanks.classList.add('hide');
            thanks.classList.remove('active');
            oops.classList.add('hide');
            oops.classList.remove('active');
            data.classList.remove('hide');
            data.classList.add('active');

            let parent = btn[i].parentNode;
            let child = parent.children[0];
            let selection = document.querySelector('#course');
            if (child.innerHTML === 'Тариф \"Тест\"')
            {
                selection.children[0].setAttribute('selected', '');
                selection.children[1].removeAttribute('selected');
            }
            if (child.innerHTML === 'Тариф \"Полный\"')
            {
                selection.children[1].setAttribute('selected', '');
                selection.children[0].removeAttribute('selected');
            }

            modal.classList.add('modal_active');
        }
    }

    close.onclick = function()
    {
        modal.classList.remove('modal_active');
    }
    
});
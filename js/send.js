/**/

function getXmlHttp()
{
    let xmlhttp;
    try
    {
        xmlhttp = new ActiveXObject("Msxm12.XMLHTTP");
    }
    catch(e)
    {
        try
        {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(E)
        {
            xmlhttp = false;
        }
    }

    if (!xmlhttp && typeof XMLHttpRequest != 'underfined')
        xmlhttp = new XMLHttpRequest();
    
    return xmlhttp;
}

function checkInput(item)
{
    let $this = item;
    let inner = $this.value, newInner = '';
    let btn = document.querySelector('.send');
    
    if ($this.name === 'user_name')
    {
        for (let i = 0; i < inner.length; i++)
        {
            if (inner[i] !== ' ') newInner += inner[i];
        }
        if (newInner == '')
        {
            $this.value = '';
            $this.placeholder = 'Некорректное имя';
            btn.setAttribute('disabled', '');
            return false;
        }
        else 
        {
            $this.placeholder = 'Имя';
        }
    }
    if ($this.name === 'user_phone')
    {
        regexp = /[0-9]/;
        for (let i = 0; i < inner.length; i++)
        {
            if (regexp.test(inner[i]))
            {
                newInner += inner[i];
            }
        }

        if (newInner.length !== 11)
        {
            btn.setAttribute('disabled', '');
            return false;
        }
    }
    if ($this.name === 'user_email')
    {
        for (let i = 0; i < inner.length; i++)
        {
            if (inner[i] === ' ') 
            {
                newInner = '';
                break;
            }

            newInner += inner[i];
        }

        regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!regexp.test(newInner))
        {
            $this.value = '';
            $this.placeholder = 'Неверный email';
            btn.setAttribute('disabled', '');
            return false;
        }
        else 
        {
            $this.placeholder = 'Email';
        }


    }

    btn.removeAttribute('disabled');
    return true;
}

function ready()
{
    let button = document.querySelector(".send");
    button.setAttribute('disabled', '');

    let name  = document.querySelector("#name"),
        phone = document.querySelector("#phone"),
        email = document.querySelector("#email");

    let inputs = [name, phone, email];
    inputs.forEach(function(item, i, inputs){
        item.addEventListener('blur', function(){
            checkInput(item);
        });
    });

    button.addEventListener('click', function(){
        let flag = true;
        inputs.forEach(function(item, i, inputs){
            if (!checkInput(item)) flag = false;
        });

        if (flag) sendMessage();

    });
}

function sendMessage()
{
    event.preventDefault();
    let name  = document.querySelector("#name"),
        phone = document.querySelector("#phone"),
        email = document.querySelector("#email"),
        course = document.querySelector("#course");
    console.log(name.value + ' ' + phone.value + ' ' + email.value + ' ' + course.value);
    let xmlhttp = getXmlHttp();
    xmlhttp.open("POST", "../php/sendToTelegram.php");
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send("name=" + encodeURIComponent(name.value) + "&phone=" + encodeURIComponent(phone.value) + 
    "&email=" + encodeURIComponent(email.value) + "&course=" + encodeURIComponent(course.value) + "&form=" + encodeURIComponent("yes"));
    xmlhttp.onreadystatechange = function()
        {
            if (xmlhttp.readyState === 4)
            {
                if (xmlhttp.status == 200)
                {   
                    let text = xmlhttp.responseText !== "" ? JSON.parse(xmlhttp.responseText) : 'error';
                    text = text['1'];
                    console.log(text);
                    let thanks = document.querySelector('.thanks'),
                        data = document.querySelector('.data'),
                        oops = document.querySelector('.oops');

                    thanks.classList.remove('hide');
                    data.classList.remove('active');
                    oops.classList.remove('active');

                    if (text)
                    {
                        thanks.classList.add('active');
                        data.classList.add('hide');
                        oops.classList.add('hide');
                    }
                    else
                    {
                        thanks.classList.add('hide');
                        data.classList.add('hide');
                        oops.classList.add('active');
                    }
                }
            }
        }
}

document.addEventListener("DOMContentLoaded", ready);




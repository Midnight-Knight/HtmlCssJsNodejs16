var check = false;
function checkbox()
{
    console.log("click");
    if (check == false)
    {
        check = true;
    }
    else
    {
        check = true;
    }
}

function ema()
{
    console.log("click");
    strEm = document.getElementById('email').value;
    if (document.getElementById('email').value.length < 6 || document.getElementById('password').value.length < 8 || strEm.indexOf('@') == -1 || strEm.indexOf('.') == -1 || (strEm.indexOf('@') > strEm.indexOf('.')) || (strEm.indexOf('@') == 0) || ((strEm.indexOf('.')-strEm.indexOf('@')) == 1) || ((strEm.length-strEm.indexOf('.')) == 1))
    {
        console.log(false);
    }
    else
    {
        console.log(true);
        console.log(check);
        document.getElementById('reg').style.width = "0";
        document.getElementById('reg').style.height = "0";
        document.getElementById('reg').style.opacity = "0";
        document.getElementById('email').style.width = "0";
        document.getElementById('email').style.height = "0";
        document.getElementById('email').style.opacity = "0";
        document.getElementById('password').style.width = "0";
        document.getElementById('password').style.height = "0";
        document.getElementById('password').style.opacity = "0";
        document.getElementById('checkbox').style.width = "0";
        document.getElementById('checkbox').style.height = "0";
        document.getElementById('checkbox').style.opacity = "0";
        document.getElementById('but').style.width = "0";
        document.getElementById('but').style.height = "0";
        document.getElementById('but').style.opacity = "0";
        document.getElementById('ok').style.width = "40vmin";
        document.getElementById('ok').style.height = "50vmin";
        document.getElementById('ok').style.opacity = "1";
        document.getElementById("h2").innerHTML = "Добро пожаловать";
        document.getElementById("h3").innerHTML = "Ваши данные";
        document.getElementById("emailH").innerHTML = "Почта: " + document.getElementById('email').value;
        document.getElementById("passwordH").innerHTML = "Пароль: " + document.getElementById('password').value;
        document.getElementById("checkboxH").innerHTML = "Состояние чек-бокса: " + check;
    }
}
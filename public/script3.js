
function resize()
{
    let id = document.querySelector('section').id;
    document.getElementById('h1').innerHTML = "ID запроса: " + id;
    let h1 = document.querySelector('h1');
    let fs = window.getComputedStyle(h1).fontSize;
    let ff = window.getComputedStyle(h1).fontFamily;
    let color = window.getComputedStyle(h1).color;
    let fw = window.getComputedStyle(h1).fontWeight;
    document.getElementById('li-1').innerHTML = "font-size: " + fs;
    document.getElementById('li-2').innerHTML = "font family: " + ff;
    document.getElementById('li-3').innerHTML = "color: " + color;
    document.getElementById('li-4').innerHTML = "font weight: " + fw;
    console.log(window.getComputedStyle(h1))
}

resize();
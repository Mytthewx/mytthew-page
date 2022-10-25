document.addEventListener('click', printMousePos, false);
document.addEventListener('mousedown', e => {
    let y = e.clientY;
    let x = e.clientX;
    let square = document.createElement("div");
    square.classList.add("square");
    document.body.appendChild(square);
    square.style.left = x - square.offsetWidth / 2 + 'px';
    square.style.top = y - square.offsetHeight / 2 + 'px';
    console.log(x, y, square.style.left, square.style.top);
});

function printMousePos(e) {
    let cursorX = e.pageX;
    let cursorY = e.pageY;
    document.getElementById('test').innerHTML = "x: " + cursorX + ", y: " + cursorY;
}
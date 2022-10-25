let square = null;
let isPressed = false;
document.addEventListener('click', printMousePos, false);


document.addEventListener('mousedown', e => {
    let x = e.clientX;
    let y = e.clientY;
    square = newSquare(x, y);
    isPressed = true;
});

document.addEventListener('mousemove', e => {
    if (isPressed) {
        let x = e.clientX;
        let y = e.clientY;
    square.style.left = x - square.offsetHeight / 2 + 'px';
    square.style.top = y - square.offsetWidth / 2 + 'px';
    }
});

document.addEventListener('mouseup', e => {
    isPressed = false;
});


function newSquare(x, y) {
    square = document.createElement("div");
    square.classList.add("square");
    document.body.appendChild(square);
    square.style.left = x - square.offsetHeight / 2 + 'px';
    square.style.top = y - square.offsetWidth / 2 + 'px';
    return square;
}

function printMousePos(e) {
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    document.getElementById('test').innerHTML = "x: " + cursorX + ", y: " + cursorY;
}
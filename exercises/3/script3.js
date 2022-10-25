let square;
let currentSquare;
let x;
let y;

document.addEventListener('click', printMousePos, false);

document.addEventListener('mousedown', e => {
    if (!currentSquare) {
        x = e.clientX;
        y = e.clientY;
        square = newSquare(x, y);
        square.addEventListener('mousedown', event => {
            currentSquare = event.currentTarget;
            x = event.clientX - currentSquare.style.left.substring(currentSquare.style.left.lenght - 2, 0);
            y = event.clientY - currentSquare.style.top.substring(currentSquare.style.top.lenght - 2, 0);
        });
    } else {
        square = currentSquare;
        currentSquare = undefined;
    }
});

document.addEventListener('mousemove', e => {
    if (square) {
        x = e.clientX;
        y = e.clientY;
        square.style.left = x - square.offsetHeight / 2 + 'px';
        square.style.top = y - square.offsetWidth / 2 + 'px';
    }
});

document.addEventListener('mouseup', e => {
    square = undefined;
});

function newSquare(x, y) {
    square = document.createElement("div");
    square.classList.add("square");
    document.body.appendChild(square);
    square.style.left = x - square.offsetHeight / 2 + 'px';
    square.style.top = y - square.offsetWidth / 2 + 'px';
    square.style.outline = "3px solid black";
    square.style.position = "absolute";
    return square;
}

function printMousePos(e) {
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    document.getElementById('test').innerHTML = "x: " + cursorX + ", y: " + cursorY;
}
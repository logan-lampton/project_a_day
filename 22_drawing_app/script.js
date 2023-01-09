// using Canvas API
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeElement = document.getElementById('size');
const colorElement = document.getElementById('color');
const clearElement = document.getElementById('clear');

let size = 10;
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;

    // console.log(isPressed, x, y);
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;

    // console.log(isPressed, x, y);
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
        // console.log(x2, y2);
    }
})

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    // want lineWidth * 2, so that the line is the width of the radius of the circle
    ctx.lineWidth = size * 2;
    ctx.stroke();
};

function updateSizeOnScreen(){
    sizeElement.innerText = size;
    console.log(sizeElement);
}

// when there is a change to the colorElement, color = the value of the target of the event
colorElement.addEventListener('change', (e) => color = e.target.value);

increaseBtn.addEventListener('click', () => {
    size += 5;
    // don't let size get greater than 50
    if(size > 50){
        size = 50;
    }
    updateSizeOnScreen();
})

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    // don't let size get less than 5
    if(size < 5){
        size = 5;
    }
    updateSizeOnScreen();
})

// use a built in method of clearRect()
clearElement.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));


// drawCircle(400, 400);
// drawLine(250, 250, 500, 500);
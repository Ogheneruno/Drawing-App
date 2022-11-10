const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const decrementBtn = document.getElementById('decrease');
const incrementBtn = document.getElementById('increase');
const sizeSpan = document.getElementById('size');
const clearBtn = document.getElementById('clear');
const colorBtn = document.getElementById('color');

let size = 10;
let isPressed = false;
let x, y, color;

sizeSpan.innerHTML = `${size}`;

decrementBtn.addEventListener('click', decrementSize);
incrementBtn.addEventListener('click', incrementSize);
colorBtn.addEventListener('input', (e) => {
    color = e.target.value;
});
clearBtn.addEventListener('click', () => {
    // window.location.reload();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);

function incrementSize() {
    if (size > 49) {
        size = 50;        
    } else {
        size = size + 5;
    }
    
    sizeSpan.innerHTML = `${size}`;
}

function decrementSize() {
    if (size < 6) {
        size = 5;        
    } else {
        size = size - 5;
    }

    sizeSpan.innerHTML = `${size}`;
}

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI *2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
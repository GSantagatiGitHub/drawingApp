const btnChangeColor = document.getElementById('change-color');
const btnClearColor = document.getElementById('clear-screen');

window.addEventListener('load', ()=> {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    let paint = false;

    function startAnimation(e) {
        paint = true;
        draw(e);
    }

    function stopAnimation() {
        paint = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!paint) return;

        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }

    canvas.addEventListener('mousedown', startAnimation);
    canvas.addEventListener('mouseup', stopAnimation);
    canvas.addEventListener('mousemove', draw);

});

// change color when button is clicked
btnChangeColor.addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
});

// clear screen when button is clicked
btnClearColor.addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
});
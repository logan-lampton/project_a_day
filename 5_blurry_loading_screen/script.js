const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// initializing loading text
let load = 0;

// increment every 30 milliseconds
let int = setInterval(blurring, 30);


function blurring() {
    load++;
    if(load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // load text goes from 0 to 100%, in the same time that opacity goes from 30px to 0px
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// from Stack Overflow; sets the opacity 1 to 0 to numbers from 1 to 100
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// creates node list for the circles
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }

    update();
})

function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active')
    // move the progress bar, based on a width out of 100%
    // actives.length is the number of active numbers
    // circles.length is the number of circles and will always be the total number: 4
    // the -1 for each is to get the percentage close to 33% each step
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive === 1){
        // resets disabled to true if we go back to 1 again
        prev.disabled = true;
    // sets next to disabled if the currentActive is on the final circle
    } else if(currentActive === circles.length){
        next.disabled = true
    // make sure the buttons work on both prev and next in the middle of the list of circles
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
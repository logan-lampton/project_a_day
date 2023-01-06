const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let activeSlide = 0;

rightButton.addEventListener('click', () => {
    // move one index higher in slides bringing the next image
    activeSlide++;

    // if activeSlide is at the end of the slides (slides.length -1 index), then go back to the first slide (slides[0])
    if(activeSlide > slides.length -1){
        activeSlide = 0;
    }
    // update the background image
    setBackgroundToBody();
    // update the active class on slides
    setActiveSlide();
});

leftButton.addEventListener('click', () => {
    // decrement one index lower in slides bringing the next image
    activeSlide--;

    // if activeSlide is at the beginning of the slides (slides[0] index), then go back to the last slide (slides.length -1)
    if(activeSlide < 0){
        activeSlide = slides.length - 1;
    }
    // update the background image
    setBackgroundToBody();
    // update the active class on slides
    setActiveSlide();
});

// call background image for the inital slide image at website load
setBackgroundToBody();

// set the background image to that of the slide using the activeSlide in the node list "slides"
function setBackgroundToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide(){
    // remove active class from all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    // add active class to the current slide
    slides[activeSlide].classList.add('active')
}


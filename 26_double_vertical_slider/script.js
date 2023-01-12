const sliderContainer = document.querySelector('.slider-container');
const rightSlide = document.querySelector('.right-slide');
const leftSlide = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

// var for all the right slide images (all the right divs)
const slidesLength = rightSlide.querySelectorAll('div').length;

// var for the active slide
let activeSlideIndex = 0;

// use slidesLength -1 to grab the last slide (4 slides - 1 = the slide at index 3, which is the last slide since node lists start at index 0)
// the - ahead of the equation makes the div go up one (I think) to change this to the first div
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

// functionality to buttons
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    // clientHeight is built in and gives the dynamic height based on the user's screen
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === 'up'){
        // refering to the var we declared at 0
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    }
    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}
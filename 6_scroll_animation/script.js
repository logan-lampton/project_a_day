// creates a variable set to a node list of all the items with the box class
const boxes = document.querySelectorAll('.box');

// when the use scrolls, it calls the function "checkBoxes"
window.addEventListener('scroll', checkBoxes);

// this method call is to have the initial boxes on the screen at load, but they would load once the user scrolls, if this call wasn't here
// "show everything above the fold"
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        // method returns the DOM rect item (a rectangle) within the viewport
        // find the top of the box
        const boxTop = box.getBoundingClientRect().top;
        // if the top of the box (DOM rect is less than the trigger on the bottom of the box, add the show class; if less, then remove the class)
        // imagine, the top of the box 
        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

    // checkBoxes fires off with the same logic scrolling up and down
}
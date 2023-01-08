const buttons = document.querySelectorAll('.ripple');

// can't use an arrow function since we use 'this' in the function
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // define the x and y axis of the button click location
        const x = e.clientX;
        const y = e.clientY;

        // define the unchanging location of the button itself
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // find the axes within button, showing them starting at 0, rather than the higher number of the page itself;
        // x is left and right
        const xInside = x - buttonLeft;
        // y is top and bottom
        const yInside = y - buttonTop;

        // create the circle element
        const circle = document.createElement('span');
        // add the circle class
        circle.classList.add('circle');
        // assign the values of yInside and xInside to add the location
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        // remove all the circles being added; a Vanilla JS issue, not React
        setTimeout(() => circle.remove(), 500);

        // console.log(x, y);
        // console.log(buttonTop, buttonLeft);
        // console.log(xInside, yInside);
    })
})
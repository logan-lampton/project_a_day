const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// mouseenter is similar to hover
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
// mouseleave will remove the class from the class list
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));
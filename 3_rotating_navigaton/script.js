const open = document.getElementById('open');
const close = document.getElementById('close');
// grabbing the class, hence the "."
const container = document.querySelector('.container');

// event listener for clicking the button to open it
open.addEventListener('click', () => container.classList.add('show-nav'));

// event listener to remove the class "show-nav" when clicked
close.addEventListener('click', () => container.classList.remove('show-nav'));


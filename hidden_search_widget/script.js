const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    // toggle the active class
    search.classList.toggle('active')
    // focus on the input
    input.focus()
})
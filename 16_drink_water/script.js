const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index));
})

function highlightCups(index){
    // toggle the cup that the user clicks, if they click it twice
    // checks to make sure the current index of the cup is full && the next cup index is NOT full
    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')){
        index--
    }
    // fill or empty any cups up to where the user clicks
    smallCups.forEach((cup, i) => {
        if(i <= index){
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })
}
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// updateBigCup();

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
    updateBigCup();
}

function updateBigCup(){
    // get the number of full cups
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    // get the number of total cups (we grabbed smallCups earlier at the top of the doc)
    const totalCups = smallCups.length;

    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        // multiply by height of cup (330px)
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups *100}%`;
    }

    // hide the remained if 100% full, or show the percentage remaining
    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        // make the liters class div innerText the percentage remaining in Liters
        // 2 liters total - 250ml * the number of cups that are full / 1000 to show in percentage
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }
}
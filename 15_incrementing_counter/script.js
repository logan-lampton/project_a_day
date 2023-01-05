const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    // both parseInt() and + are ways to make the data into a string
        // both are used below as examples
    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const c = +counter.innerText

        // 500ms
        const increment = target / 500;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})
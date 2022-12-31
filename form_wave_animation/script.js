const labels = document.querySelectorAll('.form-control label')

// can use forEach, since labels is a node list
labels.forEach(label => {
    label.innerHTML = label.innerText
        // split the label into individual letters
        .split('')
        // run code on an array each of the letters individually
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        // turns the array back into a string
        .join('')
});
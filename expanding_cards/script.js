// put all the panels into a node list
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // call a method that removes 'active' class from all panels
        removeActiveClasses();
        // adds the 'active' class to the class list
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}
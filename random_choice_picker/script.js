const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// puts the focus in the textarea so that we can immediately begin typing there
textarea.focus()

// keyup is when the user presses down and then lifts up
textarea.addEventListener('keyup', (e) => {
    // calls our function createTags on whatever the user types in
    createTags(e.target.value)
})

function createTags(input){
    // splits where the user types commas to be different elements in an array
    // the filter and map make sure that white space isn't counted
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsElement.innerHTML = '';

    // forEach tag add a span and give it the class of 'tag';
    // give the tagElement the innerText of what the user typed;
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tag
        // makes the tagElement a child of tagsElement
        tagsElement.appendChild(tagElement);
    })
}
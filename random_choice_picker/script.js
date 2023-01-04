const tagsElement = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// puts the focus in the textarea so that we can immediately begin typing there
textarea.focus()

// keyup is when the user presses down and then lifts up
textarea.addEventListener('keyup', (e) => {
    // calls our function createTags on whatever the user types in
    createTags(e.target.value)
    // if the user presses the Enter key select a random choice
    if(e.key === 'Enter'){
        // wait 10ms then clear the input value
        setTimeout(() => {
            e.target.value = ''
        }, 10);
        randomSelect();
    }
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

// randomly select a choice
function randomSelect(){
    // number of times it will highlight a choice
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100)
    }, 100);

    // clear the interval after it runs a number of times = to our times variable (so it doesn't run forever)
    // set a randomTag using the pickRandomTag method and set it to remain highlighted when the interval clears
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
           const randomTag = pickRandomTag()
           highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag(){
    // select all the elements with the class of tag
    const tags = document.querySelectorAll('.tag');
    // return the tags node list at the index of a random number * the length of the tags node list, rounded down with Math.floor method
    return tags[Math.floor(Math.random() * tags.length)];
}

// apply highlight class to a tag
function highlightTag(tag){
    tag.classList.add('highlight');
}

// remove highlight class from a tag
function unHighlightTag(tag){
    tag.classList.remove('highlight');
}
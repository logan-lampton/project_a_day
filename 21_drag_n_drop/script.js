const fill = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);

fill.addEventListener('dragend', dragEnd);

// forOf loop
// for empty of emptyBoxes do x...
for(const empty of emptyBoxes){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
};

function dragStart(){
    // add (append) the hold class to the fill class for the filled image
    this.className += ' hold';
    setTimeout(() => {
        // sets the original filled box location to invisible
        // without the timeout, it happens immediately and can't be dragged
        this.className = 'invisible', 0;
    })
    // console.log('drag start');
}

function dragEnd(){
    this.className = 'fill';
    // console.log('drag end');
}

// need to stop the default behavior of dragOver and dragEnter
function dragOver(e){
    e.preventDefault();
    // console.log('drag over');
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
    // console.log('drag enter');
}

function dragLeave(){
    this.className = 'empty';
    // console.log('drag leave');
}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);
    // console.log('drag drop');
}
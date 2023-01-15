const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
];

const types = [
    'info',
    'success',
    'error'
]

button.addEventListener('click', () => createNotification());
// for error handling in real life
// button.addEventListener('click', () => createNotification('This is invalid data'));


function createNotification(message = null, type = null) {
    // console.log('test') to make sure that the function is firing on a click
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.innerText = message ? message : getRandomMessage();
    notification.classList.add(type ? type : getRandomType())

    toasts.appendChild(notification);

    // setTimeout takes a function and time
    setTimeout(() => {
        notification.remove();
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}
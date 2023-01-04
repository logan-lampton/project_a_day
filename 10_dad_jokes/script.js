const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// new joke each time the button is clicked
jokeBtn.addEventListener('click', generateJoke);

// generate intial joke on page loading
generateJoke();

// using a JSON API
// Using a GET fetch request


// using .then
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         });
// }

// async await version
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json();
    // use the joke info in the API, thus ".joke"
    jokeEl.innerHTML = data.joke;
}
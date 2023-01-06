// discover path with my API key asking for 1 page of results
// you can paste in Chrome to see the API data
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=567337a6e77f7762ab06c2785422030f&page=1';
// image path to help show image results from the api properly
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// search url that uses my API key and part of the query to concatenate
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=567337a6e77f7762ab06c2785422030f&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');

// GET initial movies
getMovies(API_URL);

async function getMovies(url){
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
})
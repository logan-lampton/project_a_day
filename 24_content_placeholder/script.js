const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgsText = document.querySelectorAll('.animated-bg-text');

// 2.5 seconds before content appears; animation plays during those 2.5 seconds
setTimeout(getData, 2500);

function getData(){
    header.innerHTML = '<img src="https://source.unsplash.com/random" alt="random image" />';
    title.innerHTML = 'Lorem ipsum dolor, sit amet';
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, est.';
    profileImg.innerHTML = '<img src="https://source.unsplash.com/random" alt="author"/>';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'January 10, 2023';

    // a node list
    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))
    animatedBgsText.forEach(bg => bg.classList.remove('.animated-bg-text'))
}
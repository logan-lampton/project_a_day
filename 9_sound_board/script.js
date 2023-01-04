const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        
        stopSongs();
        // a built in audio method for HTML is .play
        document.getElementById(sound).play()
    });

    document.getElementById('buttons').appendChild(btn);
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        // built-in pause audio method and reset song to 0
        song.pause();
        song.currentTime = 0;
    })
}
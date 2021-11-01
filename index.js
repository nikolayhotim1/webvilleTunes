'use strict';
window.onload = init;

function init() {
    let button = document.getElementById('addButton');
    button.onclick = handleButtonClick;
}

function handleButtonClick() {
    let textInput = document.getElementById('songTextInput');
    let songName = textInput.value;

    if (songName) {
        let li = document.createElement('li');
        li.innerHTML = songName;

        let ul = document.getElementById('playlist');
        ul.appendChild(li);
    } else {
        alert('Please enter a song in form');
    }
}

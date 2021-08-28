const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingBtn = document.getElementById('setting-btn');
const settings = document.getElementById('setting');
const settingsForm = document.getElementById('setting-form');
const dificultySelect = document.getElementById('dificulty');

const words = ['apple', 'steer', 'eight', 'dgrags', 'loving'];

let randomWord;
let score = 0;
let time = 10;
let difficulty = localStorage.getItem('difficulty') != null
    ?localStorage.getItem('difficulty')
    : 'medium';

difficultySelect.value = difficulty;
text.focus();

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

addWordToDOM();

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';
    if(time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}
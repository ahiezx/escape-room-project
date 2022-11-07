// functions 
const levelOneDoor = document.querySelector("#level-one");
const levelTwoDoor = document.querySelector("#level-two");
const levelThreeDoor = document.querySelector("#level-three");
const video = document.querySelector('video');
const startBtn = document.querySelector('#start-btn');
const startDiv = document.querySelector('#start');
const gameDiv = document.querySelector('#game');
let gameStage;

// functions for entering levels

const start = () => {
    startDiv.style.display = 'none';
    gameDiv.style.display = 'block';
    video.play();
    gameStage = 'select';
}

const vidLevelOne = () => {
    document.querySelector('video source').attributes.src.nodeValue = 'videos/enter1.webm';
    video.load();
    video.play();
    gameStage = 'level1'
}

const enterLevelTwo = () => {
    console.log("enter level 2");
}

const enterLevelThree = () => {
    console.log("enter level 3");
}

function videoEnded() {
    if (gameStage == 'select') {
        video.play()
    } else if (gameStage == 'level1') {
        enterLevelOne()
    }
}

const enterLevelOne = () => {
    // enter level 1
}

// executed after DOM loaded
startBtn.addEventListener("click", start);
levelOneDoor.addEventListener("click", vidLevelOne);
levelTwoDoor.addEventListener("click", enterLevelTwo);
levelThreeDoor.addEventListener("click", enterLevelThree);
video.addEventListener("ended", videoEnded);

startDiv.style.display = 'block';
gameDiv.style.display = 'none';
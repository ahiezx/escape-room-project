// functions 
const levelOneDoor = document.querySelector("#level-one");
const levelTwoDoor = document.querySelector("#level-two");
const levelThreeDoor = document.querySelector("#level-three");
const video = document.querySelector('video');
const source = document.querySelector("video > source")
const startBtn = document.querySelector('#start-btn');
const startDiv = document.querySelector('#start');
const gameDiv = document.querySelector('#game');
let gameStage;

<<<<<<< HEAD
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
=======
let gameStage;

// Necessary to make the browser autoplay the content
const start = () => {
    startDiv.style.display = 'none'
    gameDiv.style.display = 'block'
    video.play();
    gameStage = 'select'
}

// Functions that make the videos play and stop playing properly
const videoLevelOne = () => {
    console.log(source.attributes)
    source.attributes.src.nodeValue = 'videos/enter1.webm';
    video.load();
    video.play();
    gameStage = "level1";
}

const videoLevelTwo = () => {
    source.attributes.src.nodeValue = "videos/enter2.webm";
    video.load();
    video.play();
    gameStage = "level2";
}

const videoLevelThree = () => {
    source.attributes.src.nodeValue = "videos/enter3.webm";
    video.load();
    video.play();
    gameStage = "level3"
}

const videoEnded = () => {
    if (gameStage == "select") {
        video.play();
    } else if (gameStage == "level1") {
        enterLevelOne();
    } else if (gameStage == "level2") {
        enterLevelTwo();
    } else if (gameStage == "level3") {
        enterLevelThree();
    }
}

// Level entering related below
const enterLevelOne = () => {
    video.pause();
    console.log("enter level 1");
>>>>>>> olaf-branch
}

const enterLevelTwo = () => {
    console.log("enter level 2");
}

const enterLevelThree = () => {
    console.log("enter level 3");
}

<<<<<<< HEAD
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
=======

// executed after DOM loaded
levelOneDoor.addEventListener("click", videoLevelOne);
levelTwoDoor.addEventListener("click", videoLevelTwo);
levelThreeDoor.addEventListener("click", videoLevelThree);
startBtn.addEventListener("click", start)
video.addEventListener("ended", videoEnded);
startDiv.style.display = 'block'
gameDiv.style.display = 'none'
>>>>>>> olaf-branch

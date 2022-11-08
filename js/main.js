// functions 
const levelOneDoor = document.querySelector("#level-one");
const levelTwoDoor = document.querySelector("#level-two");
const levelThreeDoor = document.querySelector("#level-three");
const startVideo = document.querySelector('#start-video');
const video = document.querySelector('#game-wrap video');
const source = document.querySelector("#game-wrap video source");
const startBtn = document.querySelector('#start-btn');
const startDiv = document.querySelector('#start');
const gameDiv = document.querySelector('#game');
const loadVid = document.querySelector('#load-in-vid')
const loadSrc = document.querySelector('#load-in-vid source')

let gameStage;

// Necessary to make the browser autoplay the content
const start = () => {
    startDiv.style.display = 'none'
    gameDiv.style.display = 'block'
    video.play();
    gameStage = 'select'
}

const replayStart = () => {
    startVideo.play()
}

const loadVideo = (file=text) => {
    loadSrc.attributes.src.nodeValue = `videos/${file}.webm`;
    loadVid.load()
}

// Functions that make the videos play and stop playing properly
const videoLevelOne = () => {
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
        hideDoors();
    } else if (gameStage == "level2") {
        enterLevelTwo();
        hideDoors();
    } else if (gameStage == "level3") {
        enterLevelThree();
        hideDoors();
    }
}

// Level entering related below
const enterLevelOne = () => {
    video.pause();
    console.log("enter level 1");
}

const enterLevelTwo = () => {
    console.log("enter level 2");
}

const enterLevelThree = () => {
    console.log("enter level 3");
}

// Hide the doors after the video has ended
const hideDoors = () => {
    levelOneDoor.style.display = 'none';
    levelTwoDoor.style.display = 'none';
    levelThreeDoor.style.display = 'none';
}

// executed after DOM loaded
levelOneDoor.addEventListener("click", videoLevelOne);
levelTwoDoor.addEventListener("click", videoLevelTwo);
levelThreeDoor.addEventListener("click", videoLevelThree);
video.addEventListener("ended", videoEnded);
startVideo.addEventListener('ended', replayStart);
startVideo.addEventListener('click', start);
startDiv.style.display = 'block'
gameDiv.style.display = 'none'
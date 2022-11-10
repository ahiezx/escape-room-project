// vars 
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
const hint = document.querySelector('.hint-text')


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

// // Dynamic video loading
// const videoLevel = (lvl) => {
//     if (lvl == 1) {
//         videoLevelOne();
//     } else if (lvl == 2) {
//         videoLevelTwo();
//     } else if (lvl == 3) {
//         videoLevelThree();
//     }
// }



// Functions that make the videos play and stop playing properly
const videoLevelOne = () => {
    source.attributes.src.nodeValue = 'videos/enter1.webm';
    video.load();
    video.play();
    gameStage = 1;
    hideDoors();
}

const videoLevelTwo = () => {
    source.attributes.src.nodeValue = "videos/enter2.webm";
    video.load();
    video.play();
    gameStage = 2;
    hideDoors();
}

const videoLevelThree = () => {
    source.attributes.src.nodeValue = "videos/enter3.webm";
    video.load();
    video.play();
    gameStage = 3
    hideDoors();
}


const videoEnded = () => {
    if (gameStage == "select") {
        video.play();
    } else if (gameStage == 1) {
        enterLevelOne();
    } else if (gameStage == 2) {
        enterLevelTwo();
    } else if (gameStage == 3) {
        enterLevelThree();
    } else if (gameStage == 'level1') {
        video.play();
    } else if (gameStage == 'level2') {
        video.play();
    } else if (gameStage == 'level3') {
        video.play();
    } else if (gameStage == 'skullscare') {
        video.pause();
        source.attributes.src.nodeValue = "videos/level2.webm";
        video.load();
        video.play();
        gameStage = 'level2'
    }
}

// Level entering related below
const enterLevelOne = () => {
    video.pause();
    startLevel(gameStage)
    source.attributes.src.nodeValue = "videos/level1.webm";
    video.load();
    video.play();
}

const enterLevelTwo = () => {
    video.pause();
    startLevel(gameStage)
    source.attributes.src.nodeValue = "videos/level2.webm";
    video.load();
    video.play();
}

const enterLevelThree = () => {
    video.pause();
    startLevel(gameStage)
}

// Start level to run functions in other javascript files
const startLevel = (level) => {
    if (level == 1) {
        levelStart();
    } else if (level == 2) {
        levelOne();
    } else if (level == 3) {
        levelTwo();
    } else if (level == 4) {
        levelMaster();
    }
}

// Hide the door hitbox after the video has ended
const hideDoors = () => {
    levelOneDoor.style.display = 'none';
    levelTwoDoor.style.display = 'none';
    levelThreeDoor.style.display = 'none';
}

// Show the hitbox for the doors
const showDoors = () => {
    levelOneDoor.style.display = 'block';
    levelTwoDoor.style.display = 'block';
    levelThreeDoor.style.display = 'block';
}

// Change hint text
const changeHint = (msg) => {return (hint.innerHTML = msg) ? true : false}

// Skull Jumpscare

const skullScare = () => {
    video.pause();
    source.attributes.src.nodeValue = "videos/skullscare.webm";
    gameStage = 'skullscare'
    video.load();
    video.play();
    skull.style.display = 'none'
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
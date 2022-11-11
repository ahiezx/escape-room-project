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
const loadVid = document.querySelector('#load-in-vid');
const loadSrc = document.querySelector('#load-in-vid source');
const hint = document.querySelector('.hint-text');
const modal = document.querySelector('#modal');
const passcodeBtn = document.querySelector('#passcode');
const returnButton = document.querySelector("#return");
const flickeringaudio = document.querySelector("#flickeringsound");
const eggaudio = document.querySelector("#eggsound");
const closeModalPassBtn = document.querySelector('#close-modal-pass');

let gameStage;

// modal template:
const modalTemplate = (text) => {
    document.querySelector(".modalText").innerHTML = text;
    document.querySelector('#modal').style.display = 'block';
}

const closeModal = () => {
    document.querySelector('#modal').style.display = 'none'
    if (startStage != 0) {
        startModal()
    }
}

// custom modal for passcodes

const modalPass = () => {
    document.querySelector('#modal-pass').style.display = 'block';
}

const closeModalPass = () => {
    document.querySelector('#modal-pass').style.display = 'none'
}
// Necessary to make the browser autoplay the content
const start = () => {
    startDiv.style.display = 'none'
    startModal()
    gameDiv.style.display = 'block'
    video.play();
    gameStage = 'select'
    flickeringaudio.play()
    flickeringaudio.volume = 0.2
}

const replayStart = () => {
    startVideo.play()
}

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

// videoEnded event listener
// Depending on the game stage, it'll play a new video or loop the video

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
    } else if (gameStage == 'death') {
        modalTemplate('You lost! Refresh to try again.')
    } else {
        video.play();
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
    source.attributes.src.nodeValue = "videos/level3.webm";
    video.load();
    video.play();
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

// Skull Jumpscare (level 2)
const skullScare = () => {
    video.pause();
    source.attributes.src.nodeValue = "videos/skullscare.webm";
    gameStage = 'skullscare';
    video.load();
    video.play();
    skull.style.display = 'none';
}

// Master scene level
const setMasterScene = () => {
    video.pause();
    source.attributes.src.nodeValue = "videos/masterscene.webm";
    video.load();
    video.play();
    levelMaster();
}

// Plays a video implying death
const death = () => {
    video.pause();
    source.attributes.src.nodeValue = "videos/death.webm";
    gameStage = 'death';
    video.load();
    video.play();
}

// Plays a win video
const win = () => {
    video.pause();
    source.attributes.src.nodeValue = "videos/win.webm";
    gameStage = 'win';
    flickeringaudio.pause();
    eggaudio.pause();
    eggaudio.load();
    eggaudio.play();
    video.load();
    video.play();
}

// Shows an easter egg
const eastereggfn = () => {
    video.pause();
    source.attributes.src.nodeValue = "videos/easteregg.webm";
    eggaudio.play()
    eggaudio.volume = 0.05  
    gameStage = 'master';
    video.load();
    video.play();
}

// Return to the start screen (select level)
returnButton.addEventListener("click", () => {
    if (gameStage == "select") {
        modalTemplate("You are already as far back as you can go!");
    } else {
        gameStage = "select";
        source.attributes.src.nodeValue = "videos/select.webm";
        video.load();
        video.play();
        showDoors();
        changeHint('Click on a door');
    }
    hideLevelOneItems();
});

// executed after DOM loaded
levelOneDoor.addEventListener("click", videoLevelOne);
levelTwoDoor.addEventListener("click", videoLevelTwo);
levelThreeDoor.addEventListener("click", videoLevelThree);
modal.addEventListener("click", closeModal);
video.addEventListener("ended", videoEnded);
startVideo.addEventListener('ended', replayStart);
startVideo.addEventListener('click', start);
passcodeBtn.addEventListener('click', () => {modalPass();});
closeModalPassBtn.addEventListener('click', closeModalPass)
startDiv.style.display = 'block'
gameDiv.style.display = 'none'
// functions 
const levelOneDoor = document.querySelector("#level-one");
const levelTwoDoor = document.querySelector("#level-two");
const levelThreeDoor = document.querySelector("#level-three");
const video = document.querySelector('video');
const startBtn = document.querySelector('#start-btn');
const startDiv = document.querySelector('#start');
const gameDiv = document.querySelector('#game');

// functions for entering levels
const enterLevelOne = () => {
    console.log(document.querySelector('video source').attributes)
    document.querySelector('video source').attributes.src.nodeValue = 'videos/enter1.webm';
    video.load();
    video.play();
    video.addEventListener("ended", function() {console.log('test')})
}

const enterLevelTwo = () => {
    console.log("enter level 2");
}

const enterLevelThree = () => {
    console.log("enter level 3");
}

const start = () => {
    startDiv.style.display = 'none'
    gameDiv.style.display = 'block'
    video.play()
}

// executed after DOM loaded
levelOneDoor.addEventListener("click", enterLevelOne);
levelTwoDoor.addEventListener("click", enterLevelTwo);
levelThreeDoor.addEventListener("click", enterLevelThree);
startBtn.addEventListener("click", start)

startDiv.style.display = 'block'
gameDiv.style.display = 'none'
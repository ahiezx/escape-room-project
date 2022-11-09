const clock = document.querySelector("#clock");
const letter = document.querySelector("#letter");
const hand = document.querySelector("#hand");


const hideLevelOneItems = () => {
    clock.style.display = "none";
    letter.style.display = "none";
    hand.style.display = "none";
};

const showItems = () => {
    clock.style.display = "block";
    letter.style.display = "block";
    hand.style.display = "block";
};


const levelStart = () => {
    gameStage = 'level1'
    
    changeHint('What does the hand point to?')
}

const chosenLetter = () => {
    console.log('chosenLetter()')
}

const chosenClock = () => {
    console.log('chosenClock()')
}

const chosenHand = () => {
    console.log('chosenHand()')
}

showItems();

clock.addEventListener("click", chosenClock);
letter.addEventListener("click", chosenLetter);
hand.addEventListener("click", chosenHand);
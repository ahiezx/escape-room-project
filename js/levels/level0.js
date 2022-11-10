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
    showItems();
    changeHint('What does the hand point to?')
}

const chosenLetter = () => {
    console.log('chosenLetter()')
    modalTemplate('The answer is a number')
}

const chosenClock = () => {
    console.log('chosenClock()')
    modalTemplate("You're close, but... <br>The answer is a number")
}

const chosenHand = () => {
    console.log('chosenHand()')
    modalTemplate('The answer is a number')
}


clock.style.display = "none";
letter.style.display = "none";
hand.style.display = "none";

clock.addEventListener("click", chosenClock);
letter.addEventListener("click", chosenLetter);
hand.addEventListener("click", chosenHand);
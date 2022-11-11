const enterBtn = document.querySelector('.enter-btn')
const codeBox = document.querySelector('.code-box')
const orderBox = document.querySelector('#order')
const easteregg = document.querySelector('#easter-egg')
const ordersound = document.querySelector('#ordersound')

let tries = 0;

// Initlize master level
const levelMaster = () => {
    gameStage = 'master'
    orderBox.style.display = 'block'
    easteregg.style.display = 'block'
    changeHint('Take the order and write down the numbers you hear')
}

// Function to check if the code is correct
const enterPass = () => {
    if (gameStage != 'master') {
        if (codeBox.reportValidity()) {
            if (codeBox.value == '934' || codeBox.value == '943') {
                closeModalPass()
                setMasterScene()
                hideDoors()
                codeBox.setAttribute("max",9999999999)
            } else {
                modalTemplate('Wrong passcode! (3 numbers long)')
            }
        }
    } else if (gameStage == 'master') {
        if (codeBox.reportValidity()) {
            tries++;
            if (codeBox.value == '9996745451' || codeBox.value == '99967454511' || codeBox.value == "999672451" || codeBox.value == "9996724511") {
                win();
            } else if (tries == 5) {
                death();
            }
        }
    }
}


// Play order sound
const playOrder = () => {
    ordersound.play()
}

enterBtn.addEventListener('click', enterPass)
orderBox.addEventListener('click', playOrder)
easteregg.addEventListener('click', eastereggfn)
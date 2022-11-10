const enterBtn = document.querySelector('.enter-btn')
const codeBox = document.querySelector('.code-box')

const levelMaster = () => {
    //
}

const enterPass = () => {
    if (codeBox.reportValidity()) {
        if (codeBox.value == '934' || codeBox.value == '943') {
            console.log('yay')
        } else {
            modalTemplate('Wrong passcode! (3 numbers long)')
        }
    }
}

enterBtn.addEventListener('click', enterPass)
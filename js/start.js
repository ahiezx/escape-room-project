let startStage = 0

const startModal = () => {
    switch (startStage) {
        case 0:
            modalTemplate("You went to bed, but couldn't sleep.<br>Suddenly at 3:33 AM, something weird happened...")
            startStage = 1
            break
        case 1:
            modalTemplate("It felt like the bed turned into a void<br>You kept falling and falling and falling...")
            startStage = 2
            break
        case 2:
            modalTemplate("You passed out on the way here.<br>You're slowly opening your eyes..")
            startStage = 3
            break
        case 3:
            modalTemplate("Find your way out by solving the puzzles<br>behind every door! Be aware of the danger...")
            startStage = 0
            break
    }
}
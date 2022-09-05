console.log("Rock Papers Scissors. Best of 5");

//Start a game for five rounds - COMPLETE
    //Determine computer selection for round - COMPLETE
    //Receive input from user selection round - COMPLETE
        //Check for acceptable value - COMPLETE
    //Determine winner of round - COMPLETE
    //Return selections- COMPLETE
    //Return win/lose message - COMPLETE
    //Require replay on tie or invalid entries - COMPLETE
    //Track number of wins/loses within game - COMPLETE
    //Iterate for five rounds - COMPLETE
//Determine winner of game - COMPLETE
//Return winner of game - COMPLETE




function gameTime() { 

    let winCounter = 0;
    let tieCounter = 0;
    let lossCounter = 0;
    let defaultCounter = 0;

    for (let i = 0; i < 5; ) {
        
        let roundStatus = determineRoundWinner();

        switch (roundStatus) {
            case "win":
                ++winCounter;
                ++i;
                console.log("You win this round")
                break;
        
            case "loss":
                ++lossCounter;
                ++i;
                console.log("You lose this round")
                break;

            case "tie":
                ++tieCounter;
                console.log("You tied, replay round");
                break;

            default:
                ++defaultCounter;
                console.log("You entered an invalid value, replay round");
        }

        console.log(winCounter, lossCounter);
        
    }

    if (winCounter > lossCounter) {
        return `You won the game ${winCounter} to ${lossCounter}`;
    }
        else {
        return `You lose the game ${winCounter} to ${lossCounter}`;
    }

}

function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"];
    const computerSelector = Math.floor(Math.random()* computerOptions.length);

    return computerOptions[computerSelector];
}

function determineRoundWinner (e) {

    let computerChoice = getComputerChoice();
    let userChoice = e.target.id;
    let roundStatus = "In Progress"

    console.log(`Computer shoots ${computerChoice}`);
    console.log(`You shoot ${userChoice}`);

    switch (computerChoice) {
        case "rock":
            if (userChoice === "rock") {
                roundStatus = "tie";
            }

            else if (userChoice === "paper") {
                roundStatus = "win";
            }

            else if (userChoice === "scissors") {
                roundStatus = "loss"
            }
            else  {
                roundStatus = ("invalid")
            }
            break

        case "paper":
            if (userChoice === "rock") {
                roundStatus = "loss";
            }

            else if (userChoice === "paper") {
                roundStatus = "tie";
            }

            else if (userChoice === "scissors") {
                roundStatus = "win"
            }
            else  {
                roundStatus = ("invalid")
            }
            break

        case "scissors":
            if (userChoice === "rock") {
                roundStatus = "win";
            }

            else if (userChoice === "paper") {
                roundStatus = "loss";
            }

            else if (userChoice === "scissors") {
                roundStatus = "tie"
            }
            else  {
                roundStatus = ("invalid")
            }
            break
        
        default:
            roundStatus = "fail"

    }
    
    console.log(roundStatus);
    const feedback = document.querySelector(".feedback");
    feedback.innerText = `\nYou ${roundStatus}`;
    
    
    return roundStatus;
}

const buttonSelection = document.querySelectorAll('button');
buttonSelection.forEach(button => button.addEventListener('click', determineRoundWinner))



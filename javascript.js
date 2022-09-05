console.log("Rock Papers Scissors. Best of 5");

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


    messageSelections(computerChoice, userChoice);
    messageRoundWinner(roundStatus);    
    return roundStatus;
}

function messageSelections (computerChoice, userChoice) {
    const feedback = document.querySelector(".feedback");

    const resetComputerSelection = document.getElementById("computerSelection"); //Identify if prior round selections are still present
    if (resetComputerSelection) feedback.removeChild(resetComputerSelection); //If prior round selections are present, remove

    const resetUserSelection = document.getElementById("userSelection"); //Identify if prior round selections are still present
    if (resetUserSelection) feedback.removeChild(resetUserSelection); //If prior round selections are present, remove

    const displayComputerSelection = document.createElement("div");
    displayComputerSelection.id = "computerSelection";
    displayComputerSelection.innerText = `\nComputer selected ${computerChoice}`;

    const displayUserSelection = document.createElement("div");
    displayUserSelection.id = "userSelection";
    displayUserSelection.innerText = `\nYou selected ${userChoice}`;

    feedback.appendChild(displayComputerSelection);
    feedback.appendChild(displayUserSelection);

}

function messageRoundWinner (roundStatus) {
    const feedback = document.querySelector(".feedback");
    
    const roundStatusReset = document.getElementById("roundStatus"); //Identify if prior round results are still present
    if (roundStatusReset) feedback.removeChild(roundStatusReset); // Reset message containing winner of prior round if present

    const displayRoundStatus = document.createElement('div');
    displayRoundStatus.id="roundStatus";
    displayRoundStatus.innerText = `\nYou ${roundStatus} this round`;

    feedback.appendChild(displayRoundStatus);
}




const buttonSelection = document.querySelectorAll('button');
buttonSelection.forEach(button => button.addEventListener('click', determineRoundWinner))



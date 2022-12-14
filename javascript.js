console.log("Rock Papers Scissors. First to 5");

function playRound (e) {

    if(userScore === 5 || computerScore === 5) userScore = computerScore = 0;
    
    let computerChoice = getComputerChoice();
    let userChoice = e.target.id;

    roundStatus = calculateWinner(computerChoice, userChoice);
    messageSelections(computerChoice, userChoice);
    messageRoundWinner(roundStatus);
    scoreKeeper(roundStatus);
    messageScore();
    gameWinner();

    console.log(userScore);
    console.log(computerScore);

}

function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"];
    const computerSelector = Math.floor(Math.random()* computerOptions.length);

    return computerOptions[computerSelector];
}

function calculateWinner (computerChoice, userChoice) {

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
    return roundStatus;
}

function scoreKeeper(roundStatus) { 

    switch (roundStatus) {
        case "win":
            ++userScore;
            break;

        case "loss":
            ++computerScore;
            break;

        case "tie":
            break;

        default:
            console.log("You entered an invalid value, replay round");
    }

    return userScore;

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
    displayUserSelection.innerText = `You selected ${userChoice}`;

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

function messageScore () {

    const feedback = document.querySelector(".feedback");
    const resetComputerScore = document.getElementById("computerScore");
    if(resetComputerScore) feedback.removeChild(resetComputerScore);

    const resetUserScore = document.getElementById("userScore");
    if(resetUserScore) feedback.removeChild(resetUserScore);



    const displayComputerScore = document.createElement("div");
    displayComputerScore.id = "computerScore";
    displayComputerScore.textContent =`\n\nComputer Score: ${computerScore}`;
    feedback.appendChild(displayComputerScore);


    const displayUserScore = document.createElement("div");
    displayUserScore.id = "userScore";
    displayUserScore.textContent =`\n\nUser Score: ${userScore}`;
    feedback.appendChild(displayUserScore);

}

function gameWinner () {

    const feedback = document.querySelector(".feedback");

    const resetWinMessage = document.getElementById("winMessage");
    if(resetWinMessage) feedback.removeChild(resetWinMessage);

    const resetLoseMessage = document.getElementById("loseMessage");
    if(resetLoseMessage) feedback.removeChild(resetLoseMessage);

    if (userScore === 5) {
        const winMessage = document.createElement ("div");
        winMessage.id = "winMessage";
        winMessage.innerText = "\nCongrats.  You got to five wins before the computer"
        feedback.appendChild(winMessage);
    }

    else if (computerScore === 5) {
        const loseMessage = document.createElement ("div");
        loseMessage.id = "loseMessage";
        loseMessage.innerText = "\nSorry.  The computer got to five wins before you"
        feedback.appendChild(loseMessage);
    }

}

let userScore = 0;
let computerScore = 0;
const buttonSelection = document.querySelectorAll('button');
buttonSelection.forEach(button => button.addEventListener('click', playRound))






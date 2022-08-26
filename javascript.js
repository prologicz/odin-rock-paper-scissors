console.log("Rock Papers Scissors");

//Start a game for five rounds
    //Determine computer selection for round
    //Receive input from user selection round
        //Check for acceptable value
    //Determine winner of round
    //Return selections
    //Return win/lose message
    //Track number of wins/loses within game
    //Iterate for five rounds
//Determine winner of game
//Return winner of game
//Start new game


function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"];
    const computerSelector = Math.floor(Math.random()* computerOptions.length);

    return computerOptions[computerSelector];
}

function getUserChoice() {
    let userSelection = prompt("Choose Rock, Paper, or Scissors.  Spelling Counts!");
    userSelection = userSelection.toLowerCase();

    return userSelection;
}

function determineRoundWinner () {
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
    let roundStatus = "In Progress"

    console.log(computerChoice);
    console.log(userChoice)

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



console.log(determineRoundWinner())
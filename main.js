function hello() {
    console.log("Hello, World!");
}

function getComputerChoice() {
    randNum = Math.random();
    choice = Math.floor(randNum * 3);

    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors!");
    //Capitalizes first letter in player choice and leaves the rest lowercase
    let firstLetter = choice.charAt(0).toUpperCase();
    let move = firstLetter + choice.slice(1).toLowerCase();
    return move;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        //determine winner
        if ((humanChoice == "Rock" && computerChoice == "Scissors") 
            || (humanChoice == "Paper" && computerChoice == "Rock")
            || (humanChoice == "Scissors" && computerChoice == "Paper")) {
                console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
                humanScore++;
        //determine tie
        } else if (humanChoice == computerChoice) {
            console.log(`You Tie! You both chose ${humanChoice}!`)
        //last option is a loss
        } else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`)
            computerScore++;
        }
    }

    for (let turn = 0; turn < 5; turn++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log(`You beat the computer by ${(humanScore - computerScore)} points!`)
    } else if (humanScore < computerScore) {
        console.log(`You lose! You lost by ${(computerScore - humanScore)} points!`)
    } else {
        console.log(`Tie! You both scored ${humanScore} points!`)
    }
}
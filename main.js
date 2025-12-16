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

function playRound(choice) {
    let computerChoice = getComputerChoice();
    let humanChoice = choice;
    //determine winner
    if ((humanChoice == "Rock" && computerChoice == "Scissors") 
        || (humanChoice == "Paper" && computerChoice == "Rock")
        || (humanChoice == "Scissors" && computerChoice == "Paper")) {
            humanPoints++;
            turnResults.textContent = `You win this round! ${humanChoice} beats ${computerChoice}!`
    } else if (humanChoice == computerChoice) {
        turnResults.textContent = `Tie! You both chose ${humanChoice}!`;
    } else {
        computerPoints++;
        turnResults.textContent = `You loss this round! ${computerChoice} beats ${humanChoice}!`;
    }
    updateScores();
    if (humanPoints >= 5 || computerPoints >= 5) {
        gameOver(humanPoints, computerPoints);
    }
}

//add event to buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

let humanPoints = 0;
let computerPoints = 0;
const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");
function updateScores() {
    humanScore.textContent = `Human Score: ${humanPoints}`;
    computerScore.textContent = `Computer Score: ${computerPoints}`;
}

const turnResults = document.querySelector(".results")
function gameOver(humanScore, computerScore) {
    if (humanScore > computerScore) {
        turnResults.textContent = `You won the game! You win by ${humanScore - computerScore} points!`;
    } else {
        turnResults.textContent = `You loss the games! The computer won by ${computerScore - humanScore} points!`;
    }
    humanPoints = 0;
    computerPoints = 0;
    let p = document.createElement("p");
    p.append("Press a button to play Again!");
    turnResults.append(p);
} 
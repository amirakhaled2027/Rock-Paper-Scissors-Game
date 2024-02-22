 const buttons = document.querySelectorAll("button");
 const resultMain = document.getElementById("result");
 const user = document.getElementById("user-score");
 const computer = document.getElementById("computer-score");

 let playerScore = 0;
 let computerScore = 0;

 buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultMain.textContent = result;
    });
 });

 function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
 }

 function playRound(playerSelction, computerSelection) {
    if(playerSelction === computerSelection) {
        return "It's a tie!!!";
    } else if(
        (playerSelction === "rock", computerSelection === "scissors") ||
        (playerSelction === "paper", computerSelection === "rock") || 
        (playerSelction === "scissors", computerSelection === "paper")) {
            playerScore++;
            user.textContent = playerScore;
            return "You win!!🥳 " + playerSelction + " beats " + computerSelection;
        } else {
            computerScore++;
            computer.textContent = computerScore;
            return "You lose!!😝" + computerSelection + " beats " + playerSelction;
        }
    
 }


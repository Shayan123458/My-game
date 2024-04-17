import inquirer from "inquirer";
async function playGame() {
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "gamePlayers",
            message: "Answer the questions!!!!ITS A SPEED FIRE ROUND",
            choices: ["play"]
        },
        {
            type: "list",
            name: "player1",
            message: "Who is the first who step on moon?",
            choices: ["Neil armstrong", "Thomas edison", "galileo"]
        },
        {
            type:"list",
            name: "player1",
            message: "What is the largest planet in our solar system?",
            choices: ["Jupiter","Mars", "Saturn", "Uranus"]
        

        }

    ]);
    if (answer.gamePlayers === "play") {
        if (answer.player1 === "Neil armstrong") {
            console.log("Correct answer!!");
        }
        else if (answer.player1 === "Thomas edison", "galileo") {
            console.log("Incorrect answer!! You lose the game");
        }
        else {
            console.log("You lose Game");
        }
    }
    else if (answer.gamePlayers === "player2") {
        if (((answer.player2 === "rock") && (answer.player1 === "scissor"))
            || ((answer.player2 === "scissor") && (answer.player1 === "paper"))
            || ((answer.player2 === "paper") && (answer.player1 === "rock"))) {
            console.log("Player 2 wins the game");
        }
        else if (answer.player1 === answer.player2) {
            console.log("It's a tie!");
        }
        else {
            console.log("Player 1 wins the game");
        }
    }
    let startgame = await inquirer.prompt({
        type: "confirm",
        name: "end",
        message: "do you want to continue",
    });
    if (startgame.end) {
        playGame();
    }
}
playGame();

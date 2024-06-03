function determineWinner(user, computer) {
    
    if (user === computer) {
        return "It's a tie!";
    }

    const winConditions = [
        [0, 2], // Rock beats scissors
        [2, 1], // Scissors beats paper
        [1, 0]  // Paper beats rock
    ];

    for (const [winner, loser] of winConditions) {
        if (user === winner && computer === loser) {
            return "You win!";
        }
    }

    return "Computer wins!";
}

const Play = (choice) => {

    const rock = "&#129308;";
    const paper = "&#9995;";
    const scissor = "&#128406;";

    const user = choice; 
    const computer = Math.floor(Math.random() * 3); 

    const userImg = document.getElementById("userImg");
    const computerImg = document.getElementById("computerImg");

    const result = determineWinner(user, computer);

    let userScore = parseInt(document.querySelector("#userScore h2").innerText);
    let computerScore = parseInt(document.querySelector("#computerScore h2").innerText);


    if (result === "Computer wins!") {
        document.querySelector("#computerScore h2").innerText=computerScore + 1;
    }

    if (result === "You win!") {
        document.querySelector("#userScore h2").innerText=userScore + 1;
    }

    console.log(userScore, computerScore)
    
    document.getElementById("resultText").innerText = result

    switch (user) {
        case 0:
            userImg.innerHTML = rock;
            break;
        case 1:
            userImg.innerHTML = paper;
            break;
        case 2:
            userImg.innerHTML = scissor;
            break;
        default:
            null
    }

    switch (computer) {
        case 0:
            computerImg.innerHTML = rock;
            break;
        case 1:
            computerImg.innerHTML = paper;
            break;
        case 2:
            computerImg.innerHTML = scissor;
            break;
        default:
            null
    }
}
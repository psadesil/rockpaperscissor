function getComputerChoice () {
    const computerChoiceArray = ["rock", "paper", "scissor"];
    const rndNum = Math.floor(Math.random() * 3);
    const computerChoice = computerChoiceArray[rndNum];
    console.log("The Computers Choice is: ");
    console.log(computerChoice); 
    playerSelection(computerChoice);
}

getComputerChoice();


function playerSelection (computerChoice) {
    let userAnswer = prompt("Enter Your Rock Paper Scissor Selection");
    let result = userAnswer.toLowerCase();
    console.log(`User Choice is : ${result}`);
    playGame(result,computerChoice);
}

function playGame (result, computerChoice) {
    if (result == "rock"){
        if (computerChoice == "scissor"){
            console.log(`You Won! ${result} beats ${computerChoice}`);
        }else if (computerChoice == "paper"){
            console.log(`You Lost! ${computerChoice} beats ${result}`);
        } else {
            console.log(`It is a Draw! Both selected ${result}.`)
        }
    } else if (result == "paper"){
        if (computerChoice == "rock"){
            console.log(`You Won! ${result} beats ${computerChoice}`);
        }else if (computerChoice == "scissor"){
            console.log(`You Lost! ${computerChoice} beats ${result}`);
        } else {
            console.log(`It is a Draw! Both selected ${result}.`)
        }
    } else {
        if (computerChoice == "paper"){
            console.log(`You Won! ${result} beats ${computerChoice}`);
        }else if (computerChoice == "rock"){
            console.log(`You Lost! ${computerChoice} beats ${result}`);
        } else {
            console.log(`It is a Draw! Both selected ${result}.`)
        }
    }
}


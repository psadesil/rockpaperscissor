const body = document.querySelector('body');
playerRound();

async function playerRound() {
    for (let i = 0 ; i < 5; i++){
        const computerChoice = getComputerChoice();
        const playerChoice = playerSelection(); 
        const gameDecision = await playGame(playerChoice,computerChoice); //await for the results
        const div = document.createElement('div');
        div.classList.add("resultHeadings");
        body.appendChild(div);
        const heading = document.createElement('h1');
        heading.classList.add("winnerHeading");
        heading.textContent = gameDecision;
        heading.style.cssText = 'color: red';
        div.appendChild(heading);
    } 
}

function getComputerChoice () {
    const computerChoiceArray = ["rock", "paper", "scissor"];
    const rndNum = Math.floor(Math.random() * 3);
    const computerChoice = computerChoiceArray[rndNum];
    console.log("The Computers Choice is: ");
    console.log(computerChoice); 
    return computerChoice;
}

// promise waits for the player to select a button
function playerSelection() {
    const container = document.getElementById('buttons');
    const buttons = container.getElementsByTagName('button');
  
    return new Promise(function(resolve, reject) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(e) {
          buttonPressed = e.target.id;
          resolve(buttonPressed);
        });
      }
    });
  }


  async function playGame(playerChoice, computerChoice) {
    const result = await playerSelection();
    console.log(`hi${result}`);
    let outputResult = "" ;
    if (result === computerChoice) {
      outputResult = "It is a Draw!" ;
      console.log(outputResult);
    } else if (
      (result === "rock" && computerChoice === "scissor") ||
      (result === "paper" && computerChoice === "rock") ||
      (result === "scissor" && computerChoice === "paper")
    ) {
      outputResult = `You Won! ${result} beats ${computerChoice}`;
      console.log(outputResult);
    } else {
      outputResult = `You Lost! ${computerChoice} beats ${result}`;
      console.log(outputResult);
    }

    return outputResult;
  }

  /*

  const div = document.createElement('div');
      let userScore = 0;
      userScore = userScore + 1;
      div.classList.add("scoreCard");
      div.textContent = `Your Score is ${userScore}`;
      body.appendChild(div);
function playerSelection (computerChoice) {
    let userAnswer = prompt("Enter Your Rock Paper Scissor Selection");
    let result = userAnswer.toLowerCase();
    console.log(`User Choice is : ${result}`);
    playGame(result,computerChoice);
}

function playerSelection () {
    let container = document.getElementById('buttons');
    let buttonPressed = false;
    console.log(container);
    container.addEventListener("click",function(e){
        const userAnswer = e.target.id;
        buttonPressed = true;
    })
    return buttonPressed;
}


*/
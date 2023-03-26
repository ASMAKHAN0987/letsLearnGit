const gameSelection = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissor",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissor",
    emoji: "✌️",
    beats: "paper",
  },
];
// All selectors
const rps = document.querySelectorAll(".rps");
// for pasting user and computer choices
const div = document.createElement("div");
div.classList.add("divCon");
const result = document.getElementById("result");
let status = document.getElementById("status");
let resultRestartDiv = document.getElementById("resultRestart");
let mainDiv = document.querySelector("#mainDiv");
let mainDivOfresultRestart = document.querySelector("#mainDiv h1");
console.log(resultRestartDiv);
// All global variables
let userScore = 0;
let computerScore = 0;
let count = 0;
// main function on click event
rps.forEach((element) => {
  // let count=0;
  element.addEventListener("click", (event) => {
    console.log("count is now", count++);
    innerDiv = document.createElement("div");
    innerDiv.classList.add("innerDiv");
    let userChoice = userTurn(element);
    let computerChoice = computerTurn();
    let computerElement = choiceShow(computerChoice);
    let userElement = choiceShow(userChoice);
    let winner = whoWins(
      userChoice,
      computerChoice,
      userElement,
      computerElement
    );
    innerDiv.appendChild(userElement);
    innerDiv.appendChild(computerElement);
    div.appendChild(innerDiv);
    document.body.appendChild(div);
      if (count == 4) {
        resultRestartDiv.classList.remove("hide");
        mainDivOfresultRestart.innerHTML = winner;
         mainDiv.style.opacity = 1;
         mainDiv.style.top = "25%";
      }
  });
});
function computerTurn() {
  //computer turn
  return Math.floor(Math.random() * (3 - 0) + 0);
}
function userTurn(element) {
  //user turn
  return element.getAttribute("dataset");
}
// who wins
function whoWins(userChoice, computerChoice, user, computer) {
  if (gameSelection[userChoice].beats == gameSelection[computerChoice].name) {
    userScore++;
    document.getElementById("userScore").innerHTML = userScore;
    status.textContent = "User Win";
    user.classList.add("winner");
    // computer.classList.add("lose");
  } else if (
    gameSelection[computerChoice].beats == gameSelection[userChoice].name
  ) {
    computerScore++;
    document.getElementById("computerScore").innerHTML = computerScore;
    computer.classList.add("winner");
    status.textContent = "Computer Win";
  } else {
    status.textContent = "Tie";
  }console.log("count in winner block: ",count);
  if(count == 4){
  return computerScore > userScore
    ? "Computer Is Winner 🏆"
    : userScore> computerScore ? "User Is Winner 🏆" : "No one is winner!😥";}
}
function choiceShow(choice) {
  span = document.createElement("span");
  span.classList.add('lose');
  span.textContent = gameSelection[choice].emoji;
  return span;
}
document.getElementById("btnRestart").addEventListener("click", () => {
  resultRestartDiv.classList.add("hide");
  location.reload();
});

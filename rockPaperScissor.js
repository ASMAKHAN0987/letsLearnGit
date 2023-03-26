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
const div = document.createElement("div");
const result = document.getElementById("result");
let status = document.getElementById("status");
let userScore = 0;
let computerScore = 0;
div.classList.add("divCon");
// main function on click event
rps.forEach((element) => {
  element.addEventListener("click", (event) => {
    let userChoice = userTurn(element);
    let computerChoice = computerTurn();
    choiceShow(computerChoice, userChoice);
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
  if (userChoice.beats == computerChoice.name) {
    userScore++;
    document.getElementById("userScore").innerHTML = userScore;
    status.textContent = "User Win";
    user.classList.remove("lose");
  } else if (computerChoice.beats == userChoice.name) {
    computerScore++;
    document.getElementById("computerScore").innerHTML = computerScore;
    computer.classList.remove("lose");
    status.textContent = "Computer Win";
  } else {
    status.textContent = "Tie";
  }
}
function choiceShow(computerChoice, userChoice) {
  let userSelectedChoice = 0;
  let computerSelectedChoice = 0;
  innerDiv = document.createElement("div");
  innerDiv.classList.add("innerDiv");
  user = document.createElement("span");
  computer = document.createElement("span");
  user.classList.add("user");
  computer.classList.add("computer");
  user.classList.add("lose");
  computer.classList.add("lose");
  userSelectedChoice = gameSelection[userChoice];
  user.textContent = gameSelection[userChoice].emoji;
  computerSelectedChoice = gameSelection[computerChoice];
  computer.textContent = gameSelection[computerChoice].emoji;
//   winner function
  whoWins(userSelectedChoice, computerSelectedChoice, user, computer);
  innerDiv.appendChild(user);
  innerDiv.appendChild(computer);
  div.appendChild(innerDiv);
  document.body.appendChild(div);
}

const selectBox = document.querySelector(".selectBox");
const PlayerX = document.querySelector(".playerX");
const PlayerO = document.querySelector(".playerO");
const playBoard = document.querySelector(".playboard");
const players = document.querySelector(".players");
const xturn = document.querySelector(".xturn");
const oturn = document.querySelector(".oturn");
const allbox = document.querySelectorAll(".box");
const result = document.querySelector(".result");
const wonText = document.querySelector(".won-game");
const replay = document.querySelector("#reset");
const reset = document.querySelector(".res");
let currentTurn,
  xClass = "X",
  oClass = "O",
  player;
PlayerX.addEventListener("click", function () {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
  currentTurn = true;
  player = "x";
  xturn.classList.add("active");
});
PlayerO.addEventListener("click", playerO);
function playerO() {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
  currentTurn = false;
  player = "o";
  oturn.classList.add("active");
}
allbox.forEach((box) => {
  box.addEventListener("click", clicked, { once: true });
});

function clicked(event) {
  const box = event.target;
  const currentClass = currentTurn
    ? (box.innerHTML = "X")
    : (box.innerHTML = "O");
  placeMark(box, currentClass);
  swapturns();
  if (
    (allbox[0].innerHTML == xClass &&
      allbox[1].innerHTML == xClass &&
      allbox[2].innerHTML == xClass) ||
    (allbox[0].innerHTML == oClass &&
      allbox[1].innerHTML == oClass &&
      allbox[2].innerHTML == oClass)
  )
    winner(allbox[0].innerHTML);
  else if (
    (allbox[3].innerHTML == xClass &&
      allbox[4].innerHTML == xClass &&
      allbox[5].innerHTML == xClass) ||
    (allbox[3].innerHTML == oClass &&
      allbox[4].innerHTML == oClass &&
      allbox[5].innerHTML == oClass)
  )
    winner(allbox[3].innerHTML);
  else if (
    (allbox[6].innerHTML == xClass &&
      allbox[7].innerHTML == xClass &&
      allbox[8].innerHTML == xClass) ||
    (allbox[6].innerHTML == oClass &&
      allbox[7].innerHTML == oClass &&
      allbox[8].innerHTML == oClass)
  )
    winner(allbox[6].innerHTML);
  else if (
    (allbox[0].innerHTML == xClass &&
      allbox[3].innerHTML == xClass &&
      allbox[6].innerHTML == xClass) ||
    (allbox[0].innerHTML == oClass &&
      allbox[3].innerHTML == oClass &&
      allbox[6].innerHTML == oClass)
  )
    winner(allbox[0].innerHTML);
  else if (
    (allbox[1].innerHTML == xClass &&
      allbox[4].innerHTML == xClass &&
      allbox[7].innerHTML == xClass) ||
    (allbox[1].innerHTML == oClass &&
      allbox[4].innerHTML == oClass &&
      allbox[7].innerHTML == oClass)
  )
    winner(allbox[1].innerHTML);
  else if (
    (allbox[2].innerHTML == xClass &&
      allbox[5].innerHTML == xClass &&
      allbox[8].innerHTML == xClass) ||
    (allbox[2].innerHTML == oClass &&
      allbox[5].innerHTML == oClass &&
      allbox[8].innerHTML == oClass)
  )
    winner(allbox[2].innerHTML);
  else if (
    (allbox[0].innerHTML == xClass &&
      allbox[4].innerHTML == xClass &&
      allbox[8].innerHTML == xClass) ||
    (allbox[0].innerHTML == oClass &&
      allbox[4].innerHTML == oClass &&
      allbox[8].innerHTML == oClass)
  )
    winner(allbox[0].innerHTML);
  else if (
    (allbox[2].innerHTML == xClass &&
      allbox[4].innerHTML == xClass &&
      allbox[6].innerHTML == xClass) ||
    (allbox[2].innerHTML == oClass &&
      allbox[4].innerHTML == oClass &&
      allbox[6].innerHTML == oClass)
  )
    winner(allbox[2].innerHTML);
}
function placeMark(box, currentClass) {
  xturn.classList.toggle("active");
  oturn.classList.toggle("active");
}
function swapturns() {
  currentTurn = !currentTurn;
}
function winner(win) {
  wonText.innerHTML = "player " + win + " " + "won the game";
  result.classList.add("showwinner");
  playBoard.classList.remove("show");
}
function draw() {
  wonText.innerHTML = "Draw Match";
  result.classList.add("showwinner");
  playBoard.classList.remove("show");
}
replay.addEventListener("click", () => {
  window.location.reload();
});
reset.addEventListener("click", () => {
  window.location.reload();
});

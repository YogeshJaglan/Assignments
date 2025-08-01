const board = document.getElementById("board");
const status = document.getElementById("status");

let currentPlayer = "X";
let gameState = Array(9).fill("");
let gameActive = true;

const winCombos = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

function renderBoard() {
  board.innerHTML = "";
  gameState.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.className = "cell";
    cellDiv.textContent = cell;
    cellDiv.addEventListener("click", () => handleClick(index));
    board.appendChild(cellDiv);
  });
}

function handleClick(index) {
  if (gameState[index] || !gameActive) return;

  gameState[index] = currentPlayer;
  renderBoard();

  if (checkWinner()) {
    const winCombo = getWinningCombo();
    if (winCombo) {
      highlightWin(winCombo);
    }
    status.textContent = `🎉 Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (!gameState.includes("")) {
    status.textContent = "It's a Draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  return winCombos.some(combo => {
    const [a, b, c] = combo;
    return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
  });
}

function getWinningCombo() {
  return winCombos.find(combo => {
    const [a, b, c] = combo;
    return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
  });
}

function highlightWin(combo) {
  const cells = document.querySelectorAll('.cell');
  combo.forEach(index => {
    cells[index].classList.add('win');
  });
}

function resetGame() {
  gameState = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;
  status.textContent = `Player ${currentPlayer}'s turn`;
  renderBoard();
}

renderBoard();

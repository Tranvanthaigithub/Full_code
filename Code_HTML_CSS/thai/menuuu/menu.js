let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');

function cellClicked(cellIndex) {
    let cell = document.getElementById(`cell-${cellIndex}`);
    if (!cell.innerText) {
        cell.innerText = currentPlayer;
        if (checkWin()) {
            alert(`Player ${currentPlayer} wins!`);
            resetBoard();
            return;
        }
        if (checkDraw()) {
            alert("It's a draw!");
            resetBoard();
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    const winConditions = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
        [1, 5, 9], [3, 5, 7] // Diagonals
    ];
    return winConditions.some((condition) => {
        return condition.every((cellIndex) => {
            return document.getElementById(`cell-${cellIndex}`).innerText === currentPlayer;
        });
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.innerText);
}

function resetBoard() {
    cells.forEach(cell => cell.innerText = '');
    currentPlayer = 'X';
}

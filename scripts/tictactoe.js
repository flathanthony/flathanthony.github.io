const X_TXT = 'X';
const O_TXT = 'O';
const NUM_CELLS = 9;
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const newGameButton = document.getElementById('new-game');
newGameButton.addEventListener('click', start);
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('#message');
let xTurn = true;

start();

function start() {
    xTurn = false;
    changeTurn();
    cells.forEach( cell => {
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, {once: true});
        cell.innerText = '';
    });
}

function handleClick() {
    this.innerText = xTurn ? X_TXT : O_TXT;
    if (checkWin()) {
        end();
    } else if (!staleMate()) {
        changeTurn();
    }
}

function checkWin() {
    return WINNING_COMBINATIONS.some(combo => {
        return combo.every(index => {
            return cells[index].innerText == (xTurn ? X_TXT : O_TXT);
        })
    })
}

function staleMate() {
    for (const cell of cells) {
        if (cell.innerText == '')
            return false;
    }
    message.innerText = 'Stalemate!';
    return true;
}

function end() {
    message.innerText = `${xTurn ? X_TXT : O_TXT} wins!`;
    cells.forEach( cell => {
        cell.removeEventListener('click', handleClick);
    });
}

function changeTurn() {
    xTurn = !xTurn;
    message.innerText = `Current Turn: ${xTurn ? X_TXT : O_TXT}`;
    if (xTurn) {
        enable();
    } else {        
        disable();
        setTimeout(botPlay, 1000);
    }
}

function disable() {
    cells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
    });
}

function enable() {
    cells.forEach(cell => {
        if (cell.innerText == '') {
            cell.addEventListener('click', handleClick, {once: true});
        }
    });
}

function botPlay() {
    for (let i = 0; i < NUM_CELLS; ++i) {
        if (cells[i].innerText == '') {
            cells[i].innerText = O_TXT;
            break;
        }
    }
    changeTurn();
}

const DEPTH = 9;
function minMax(depth = DEPTH, isMax = false ) {
    
}
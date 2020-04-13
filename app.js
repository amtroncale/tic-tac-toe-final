const cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click');
}

let currentPlayer = 'x';
let isGameOver = false;
let moves = 0;


function cellClicked(e) {

    if(isGameOver) {
        resetGame;
        return;
    }

    if (e.target.textContent === 'x' || e.target.textContent === 'o') {
        return;
    }

        e.target.textConstant = currentPlayer;
        moves++;

        checkWinner();

        togglePlayer();
}

console.log(cells);

function checkWinner() {
    if (cells[0].textContent === 'x' && cells[1].textContent === 'x' && cells[2].textContent === 'x') {
        isGameOver = true;
        console.log('X WINS!');
    }
    else if (cells[3].textContent === 'x' && cells[4].textContent === 'x' && cells[5].textContent === 'x') {
        isGameOver = true;
        console.log('X WINS!');
    }
    else if (cells[6].textContent === 'x' && cells[7].textContent === 'x' && cells[8].textContent === 'x') {
        isGameOver = true;
        console.log('X WINS!');
    }
    else if (cells[0].textContent === 'x' && cells[3].textContent === 'x' && cells[6].textContent === 'x') {
        isGameOver = true;
        console.log('X WINS!');
    }
    else if (cells[0].textContent === 'x' && cells[3].textContent === 'x' && cells[6].textContent === 'x') {
        isGameOver = true;
        console.log('X WINS!');
    }
    else if (cells[2].textContent === 'x' && cells[5].textContent === 'x' && cells[8].textContent === 'x') {
        isGameOver = true;
        console.log('X WINS!');
    }
    else if (cells[0].textContent === 'x' && cells[4].textContent === 'x' && cells[8].textContent === 'x') {
        isGameOver = true;
        console.log('X WINS!');
    }
    else if (cells[2].textContent === 'x' && cells[4].textContent === 'x' && cells[6].textContent === 'x') {
        isGameOver = true;
        console.log('X WINS!');
    }

    else if (cells[0].textContent === 'o' && cells[1].textContent === 'o' && cells[2].textContent === 'o') {
    isGameOver = true;
    console.log('O WINS!');
    }
    else if (cells[3].textContent === 'o' && cells[4].textContent === 'o' && cells[5].textContent === 'o') {
    isGameOver = true;
    console.log('O WINS!');
    }
    else if (cells[6].textContent === 'o' && cells[7].textContent === 'o' && cells[8].textContent === 'o') {
    isGameOver = true;
    console.log('O WINS!');
    }
    else if (cells[0].textContent === 'o' && cells[3].textContent === 'o' && cells[6].textContent === 'o') {
    isGameOver = true;
    console.log('O WINS!');
    }
    else if (cells[0].textContent === 'o' && cells[3].textContent === 'o' && cells[6].textContent === 'o') {
    isGameOver = true;
    console.log('O WINS!');
    }
    else if (cells[2].textContent === 'o' && cells[5].textContent === 'o' && cells[8].textContent === 'o') {
    isGameOver = true;
    console.log('O WINS!');
    }
    else if (cells[0].textContent === 'o' && cells[4].textContent === 'o' && cells[8].textContent === 'o') {
    isGameOver = true;
    console.log('O WINS!');
    }
    else if (cells[2].textContent === 'o' && cells[4].textContent === 'o' && cells[6].textContent === 'o') {
    isGameOver = true;
    console.log('O WINS!');
    }
    else if (moves === 9) {
        isGameOver = true; 
        console.log('DRAW!')
    }
}
function togglePlayer() {
    if (currentPlayer === 'x') {
        currentPlayer = 'o';
    } else {    
        currentPlayer = 'x';
    }
}

function resetGame() {
    isGameOver = false;
    moves = 0;
    currentPlayer = 'x';
    for (let i = o; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}
let gamePlay = ['x','o','o','x','x','o','o','','x'];
let currentPlayer = '';
let player1Name = '';
let player2Name = '';
const gameGrid = document.querySelector('.gridWrapper');

function render () {
    for (let i = 0; i < gamePlay.length; i++) {
        const gridBox = document.createElement('div')
            gridBox.classList.add('gridBox');
            gridBox.textContent = gamePlay[i]
            gameGrid.appendChild(gridBox);
    }
}

render()

function clear() {
    gamePlay = ['','','','','','','','','']
    while(gameGrid.firstChild){
        gameGrid.removeChild(gameGrid.lastChild);
    }
    render()
}
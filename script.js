let gamePlay = ['x','o','o','x','x','o','o','','x'];
let currentPlayer = '';
let player1Name = '';
let player2Name = '';

function render () {
    const gameGrid = document.querySelector('.gridWrapper');
    for (let i = 0; i < gamePlay.length; i++) {
        const gridBox = document.createElement('div')
            gridBox.classList.add('gridBox');
            gridBox.textContent = gamePlay[i]
            gameGrid.appendChild(gridBox);
    }
}

render()
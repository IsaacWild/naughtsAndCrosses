//Object factory for the gameboard logic?
//This works!!
const gameBoard = (() => {

    let gamePlay = ['O','X','','O','X','','','',''];

    const gameGrid = document.querySelector('.gameWrapper')

    const _render = () => {
        for (let i = 0; i < 9; i++) {
            const gameBox = document.createElement('div');
            const gamePiece = document.createElement('p')
            gameBox.classList.add('gameBox');
            gameBox.setAttribute('id',`box${i}`);
            gameBox.appendChild(gamePiece);
            gameGrid.appendChild(gameBox);
        }
    }
    _render();

    return { gamePlay }

})();
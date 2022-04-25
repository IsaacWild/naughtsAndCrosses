//Object factory for the gameboard logic?
//This works!!
const gameBoard = (() => {

    let gamePlay = ['o','x','','o','x','','','',''];

    const gameGrid = document.querySelector('.gameWrapper')

    const _render = () => {
        for (let i = 0; i < gamePlay.length; i++) {
            const gameBox = document.createElement('div')
            gameBox.classList.add('gameBox');
            gameBox.setAttribute('id',`box${i}`);
            gameGrid.appendChild(gameBox);
            gameBox.addEventListener('click', ()=>{
                gameBox.classList.toggle('cross')
                //needs to be based of current player
            })
        }
    }
    _render();

})();


const player = (name, marker) => {
    name = _getName || 'player 1';
    marker = _getMarker;
    //need to get current player from button selection from top
}
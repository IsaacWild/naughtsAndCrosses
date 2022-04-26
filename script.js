//Object factory for the gameboard logic?
//This works!!
const gameBoard = (() => {

    let gamePlay = ['o','x','','o','x','','','',''];
    let playerMarker ='';

    const gameGrid = document.querySelector('.gameWrapper')

    const _render = () => {
        for (let i = 0; i < gamePlay.length; i++) {
            const gameBox = document.createElement('div')
            gameBox.classList.add('gameBox');
            gameBox.setAttribute('id',`box${i}`);
            gameGrid.appendChild(gameBox);
            const markerImgBox = document.createElement('img')
            markerImgBox.classList.add('crossImg')
            gameBox.appendChild(markerImgBox)
            gameBox.addEventListener('click', ()=>{
                if(playerMarker == 'x'){
                    gameBox.classList.toggle('cross')
                }else if (playerMarker == 'o'){
                gameBox.classList.toggle('nought')
                }
            })
        }
    }
    _render();

})();

const player = (name, marker) => {
    name = _getName() || 'player 1';
    marker = (() => {
        const btnCross = document.querySelector('.btnCross');
    const btnNought = document.querySelector('.btnNought');
    btnCross.addEventListener('click', ()=>{
        playerMarker='x';
    })
    btnCross.addEventListener('click', ()=>{
        playerMarker='o';
    })
    })();
    return {marker}
    //need to get current player from button selection from top   
}


player.marker();
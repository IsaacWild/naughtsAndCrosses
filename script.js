//Object factory for the gameboard logic?
//This works!!
const gameBoard = (() => {
    const gameTitle = document.querySelector('.title');
    const gameGrid = document.querySelector('.gameWrapper')

    const _render = () => {
        for (let i = 0; i < 9; i++) {
            const gameBox = document.createElement('div');
            gameBox.classList.add('gameBox');
            gameGrid.appendChild(gameBox);
        }
    }
    _render();

    const changeTitle = () => gameTitle.textContent = 'Test';
    const sayHi = () => alert('Hello!!'); 
    const hiLog = () => console.log('This is a test log!')

    return { changeTitle, hiLog };
})();

console.log('test');
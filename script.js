//Object factory for the gameboard logic?
//This works!!
const gameBoard = (() => {
    const gameTitle = document.querySelector('.title');

    const render = 'make game board and insert into DOM';

    const changeTitle = () => gameTitle.textContent = 'Test';
    const sayHi = () => alert('Hello!!'); 
    const hiLog = () => console.log('This is a test log!')


    return { changeTitle, hiLog };
})();

console.log('test');
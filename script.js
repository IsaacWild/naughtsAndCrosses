//Object factory for the gameboard logic?

const gameTitle = document.querySelector('.title');

const gameBoard = () => {
    const changeTitle = () => gameTitle.textContent = 'Test';
    const sayHi = () => alert('Hello!!'); 
    const hiLog = () => console.log('This is a test log!')
    return { changeTitle, hiLog };
};

gameBoard.changeTitle();
gameBoard.sayHi();
gameBoard.hiLog();

//object factory for the players? (choose between 2 people playing or against computer)
(function(){
    let _players ={
        
    }
})()

//Object to control flow of the game?
(function(){
    let _gamePlay ={
        
    }
})()
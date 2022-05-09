const game = (() => {
    let playerXWins = 0
    let playerOWins = 0
    let gameWon = false;
    let gamePlay = ['','','','','','','','',''];
    let gameMessage = document.querySelector('.gameMessage')
    let currentPlayer = '';
    let playerXName = '';
    let playerOName = '';
    const btnPlayGame = document.querySelector('.btnPlay')
    const XWinsTag = document.querySelector('.XWinsTag')
    const OWinsTag = document.querySelector('.OWinsTag')
    const gameGrid = document.querySelector('.gridWrapper')
    
    function  render() {
        for (let i = 0; i < 9; i++) {
            const gridBox = document.createElement('div')
                gridBox.classList.add('gridBox');
                if((playerXName && playerOName) == ''){
                gridBox.classList.add('disabled');
                }
                gridBox.textContent = gamePlay[i]
                gameGrid.appendChild(gridBox);
                gridBox.addEventListener('click', () => {
                    if (currentPlayer == 'x'){
                        gamePlay.splice(i,1,'x');
                        gridBox.classList.add('cross');
                        currentPlayer = 'o'
                        gameMessage.textContent = `${playerOName} it's your turn! Place your O`
                        checkWin()
                    }else if (currentPlayer == 'o'){
                        gamePlay.splice(i,1,'o');
                        gridBox.classList.add('nought');
                        currentPlayer = 'x'
                        gameMessage.textContent = `${playerXName} it's your turn! Place your X`
                        checkWin()
                    }
                }, {once : true});
        }
    }
    
    
    function clear() {
        gamePlay = ['','','','','','','','','']
        while(gameGrid.firstChild){
            gameGrid.removeChild(gameGrid.lastChild);
        }
        gameWon = false;
        btnPlayGame.classList.toggle('disabled')
        render()
    }
    
    function gameStart(){
        const allGridBoxes = document.querySelectorAll('.gridBox')
        btnPlayGame.addEventListener('click', () => {
            playerXName = document.querySelector('#playerXName').value;
            playerOName = document.querySelector('#playerOName').value;
            if(gameWon == true){
                clear()
                if(currentPlayer == 'x'){
                    gameMessage.textContent = `X's go first! ${playerXName} Your turn!` 
                }else{
                    gameMessage.textContent = `O's go first! ${playerOName} Your turn!` 
                }
            }else{
                if((playerXName == '') || (playerOName == '')){
                    gameMessage.textContent = 'Please enter 2 names before you play'
                }else{
                    let firstPlayer = Math.round(Math.random())
                    if (firstPlayer == 0){
                        gameMessage.textContent = `X's go first! ${playerXName} Your turn!` 
                        currentPlayer = 'x'
                        btnPlayGame.classList.toggle('disabled')
                        allGridBoxes.forEach(gridBox => {
                            gridBox.classList.remove('disabled')
                        });
                    }else if(firstPlayer == 1){
                        gameMessage.textContent = `O's go first! ${playerOName} Your turn!` 
                        currentPlayer = 'o'
                        btnPlayGame.classList.toggle('disabled')
                        allGridBoxes.forEach(gridBox => {
                            gridBox.classList.remove('disabled')
                        });
                    }
                }
            }
        });
    }
    
    function checkWin(){
        const allGridBoxes = document.querySelectorAll('.gridBox')
        let a = gamePlay[0]
        let b = gamePlay[1]
        let c = gamePlay[2]
    
        if (a == 'x' && b == 'x' && c == 'x'){
            return playerXWin();
        } else if (a == 'o' && b == 'o' && c == 'o'){
            return playerOWin();
        }else
        a = gamePlay[3]
        b = gamePlay[4]
        c = gamePlay[5]
        if (a == 'x' && b == 'x' && c == 'x'){
            return playerXWin();
        } else if (a == 'o' && b == 'o' && c == 'o'){
            return playerOWin();
        }else
        a = gamePlay[6]
        b = gamePlay[7]
        c = gamePlay[8]
        if (a == 'x' && b == 'x' && c == 'x'){
            return playerXWin();
        } else if (a == 'o' && b == 'o' && c == 'o'){
            return playerOWin();
        }else
        a = gamePlay[0]
        b = gamePlay[3]
        c = gamePlay[6]
        if (a == 'x' && b == 'x' && c == 'x'){
            return playerXWin();
        } else if (a == 'o' && b == 'o' && c == 'o'){
            return playerOWin();
        }else
        a = gamePlay[1]
        b = gamePlay[4]
        c = gamePlay[7]
        if (a == 'x' && b == 'x' && c == 'x'){
            return playerXWin();
        } else if (a == 'o' && b == 'o' && c == 'o'){
            return playerOWin();
        }else
        a = gamePlay[2]
        b = gamePlay[5]
        c = gamePlay[8]
        if (a == 'x' && b == 'x' && c == 'x'){
            return playerXWin();
        } else if (a == 'o' && b == 'o' && c == 'o'){
            return playerOWin();
        }else
        a = gamePlay[0]
        b = gamePlay[4]
        c = gamePlay[8]
        if (a == 'x' && b == 'x' && c == 'x'){
            return playerXWin();
        } else if (a == 'o' && b == 'o' && c == 'o'){
            return playerOWin();
        }else
        a = gamePlay[2]
        b = gamePlay[4]
        c = gamePlay[6]
        if (a == 'x' && b == 'x' && c == 'x'){
            return playerXWin();
        } else if (a == 'o' && b == 'o' && c === 'o'){
            return playerOWin();
        } else if (!gamePlay.includes('')){
            return tie()
        }
    
        playerXWin = () => {
            gameMessage.textContent = `Well done ${playerXName} you won!!`
            gameWon = true
            allGridBoxes.forEach(gridBox => {
                gridBox.classList.add('disabled')
            });
            btnPlayGame.classList.toggle('disabled')
            playerXWins++
            XWinsTag.textContent = `Wins: ${playerXWins}`
            OWinsTag.textContent = `Wins: ${playerOWins}`
        }
    
        playerOWin = () => {
            gameMessage.textContent = `Well done ${playerOName} you won!!`
            gameWon = true
            allGridBoxes.forEach(gridBox => {
                gridBox.classList.add('disabled')
            });
            btnPlayGame.classList.toggle('disabled')
            playerOWins++
            XWinsTag.textContent = `Wins: ${playerXWins}`
            OWinsTag.textContent = `Wins: ${playerOWins}`
        }
    
        tie = () => {
            gameMessage.textContent = `It's a tie!!`
            gameWon = true
            allGridBoxes.forEach(gridBox => {
                gridBox.classList.add('disabled')
            });
            btnPlayGame.classList.toggle('disabled')
        }
    }
    
    render()
    gameStart()
})();
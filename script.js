//Object factory for the gameboard logic?
//This works!!
const gameBoard = (() => {

    let gamePlay = ['','','','','','','','',''];
    let playerMarker = '';
    const btnCross = document.querySelector('.btnCross');
    const btnNought = document.querySelector('.btnNought');
    const gameGrid = document.querySelector('.gameWrapper');
    const markerMessage = document.querySelector('.markerMessage')
    
    let player1Name  = '';
    let player2Name = '';
    let player1Marker = '';
    let player2Marker = '';

    const _render = () => {
        for (let i = 0; i < gamePlay.length; i++) {
            const gameBox = document.createElement('div')
            gameBox.classList.add('gameBox');
            gameBox.setAttribute('id',`${i}`);
            gameGrid.appendChild(gameBox);
            const markerImgBox = document.createElement('img')
            markerImgBox.classList.add('emptyBox')
            gameBox.appendChild(markerImgBox)
            gameBox.addEventListener('click', ()=>{
                if(markerImgBox.classList[1] != 'selectedBox'){
                    if(this.playerMarker == 'x'){
                        gamePlay.splice(i,1,'x');
                        markerImgBox.classList.add('cross', 'selectedBox');
                        markerImgBox.classList.remove('emptyBox');
                        checkWin(gamePlay);
                        this.playerMarker = 'o';
                        btnCross.classList.toggle('selectedMarker')
                        btnNought.classList.toggle('selectedMarker')
                        console.log('changed to: ' + this.playerMarker)
                        if (player1Marker == 'x'){
                            markerMessage.textContent = this.player2Name + 'take your turn'
                        } else {
                            markerMessage.textContent = this.player1Name + 'take your turn'
                        }
                        
                    }else if (this.playerMarker == 'o'){
                        gamePlay.splice(i,1,'o');
                        markerImgBox.classList.add('nought', 'selectedBox');
                        markerImgBox.classList.remove('emptyBox');
                        checkWin(gamePlay);
                        this.playerMarker = 'x';
                        btnCross.classList.toggle('selectedMarker')
                        btnNought.classList.toggle('selectedMarker')
                        console.log('changed to: ' + this.playerMarker)
                        if (player1Marker == 'o'){
                            markerMessage.textContent = this.player2Name + 'take your turn'
                        } else {
                            markerMessage.textContent = this.player1Name + 'take your turn'
                        }
                    }
                }
            })
            if(gamePlay[i] == 'x'){
                markerImgBox.classList.add('cross')
            }else if (gamePlay[i] == 'o'){
                markerImgBox.classList.add('nought')
            }
        }
    }    
    _render();
    return{ gamePlay}
})();

//sets player marker
const player = (() => {
    const btnCross = document.querySelector('.btnCross');
    const btnNought = document.querySelector('.btnNought');
    const btnStart = document.querySelector('.btnStartGame');
    const markerMessage = document.querySelector('.markerMessage')
    btnCross.addEventListener('click', ()=> {
        if(this.playerMarker == null){
            this.playerMarker = 'x';
            btnCross.classList.toggle('selectedMarker')
            player1Marker = 'x'
            player2Marker = 'o'
            markerMessage.textContent = player1Name + ' take your turn'
        }
    })
    btnNought.addEventListener('click', ()=> {
        if(this.playerMarker == null){
            this.playerMarker = 'o';
            btnNought.classList.toggle('selectedMarker')
            player1Marker = 'o'
            player2Marker = 'x'
            markerMessage.textContent = player1Name + ' take your turn'
        }  
    })
    btnStart.addEventListener('click', ()=> {
        this.player1Name = document.querySelector('#player1Name').value;
        this.player2Name = document.querySelector('#player2Name').value;
        markerMessage.textContent = this.player1Name + ' Choose your marker';
    })
})();

const checkWin = (gamePlay) => {
    console.log('test')
    let a = gamePlay[0]
    let b = gamePlay[1]
    let c = gamePlay[2]
    let playString = '';
    for (var i = 0; i < gamePlay.length; i++) {
        playString = playString + gamePlay[i]
        console.log(playString)
    }
    if (a == 'x' && b == 'x' && c == 'x'){
        console.log(a,b,c)
        return console.log("X win's")
    } else if (a == 'o' && b == 'o' && c == 'o'){
        console.log(a,b,c)
        return console.log("O win's")
    }else
    a = gamePlay[3]
    b = gamePlay[4]
    c = gamePlay[5]
    if (a == 'x' && b == 'x' && c == 'x'){
        console.log(a,b,c)
        return console.log("X win's")
    } else if (a == 'o' && b == 'o' && c == 'o'){
        console.log(a,b,c)
        return console.log("O win's")
    }else
    a = gamePlay[6]
    b = gamePlay[7]
    c = gamePlay[8]
    if (a == 'x' && b == 'x' && c == 'x'){
        console.log(a,b,c)
        return console.log("X win's")
    } else if (a == 'o' && b == 'o' && c == 'o'){
        console.log(a,b,c)
        return console.log("O win's")
    }else
    a = gamePlay[0]
    b = gamePlay[3]
    c = gamePlay[6]
    if (a == 'x' && b == 'x' && c == 'x'){
        console.log(a,b,c)
        return console.log("X win's")
    } else if (a == 'o' && b == 'o' && c == 'o'){
        console.log(a,b,c)
        return console.log("O win's")
    }else
    a = gamePlay[1]
    b = gamePlay[4]
    c = gamePlay[7]
    if (a == 'x' && b == 'x' && c == 'x'){
        console.log(a,b,c)
        return console.log("X win's")
    } else if (a == 'o' && b == 'o' && c == 'o'){
        console.log(a,b,c)
        return console.log("O win's")
    }else
    a = gamePlay[2]
    b = gamePlay[5]
    c = gamePlay[8]
    if (a == 'x' && b == 'x' && c == 'x'){
        console.log(a,b,c)
        return console.log("X win's")
    } else if (a == 'o' && b == 'o' && c == 'o'){
        console.log(a,b,c)
        return console.log("O win's")
    }else
    a = gamePlay[0]
    b = gamePlay[4]
    c = gamePlay[8]
    if (a == 'x' && b == 'x' && c == 'x'){
        console.log(a,b,c)
        return console.log("X win's")
    } else if (a == 'o' && b == 'o' && c == 'o'){
        console.log(a,b,c)
        return console.log("O win's")
    }else
    a = gamePlay[2]
    b = gamePlay[4]
    c = gamePlay[6]
    if (a == 'x' && b == 'x' && c == 'x'){
        console.log(a,b,c)
        return console.log("X win's")
    } else if (a == 'o' && b == 'o' && c === 'o'){
        console.log(a,b,c)
        return console.log("O win's")
    }else if (playString.length == 9){
        return console.log('tie')
    }
};

const showWin = () => {
    
}
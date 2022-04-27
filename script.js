//Object factory for the gameboard logic?
//This works!!
const gameBoard = (() => {

    let gamePlay = ['','','','','','','','',''];
    let playerMarker = '';

    const gameGrid = document.querySelector('.gameWrapper')

    const _render = () => {
        for (let i = 0; i < gamePlay.length; i++) {
            const gameBox = document.createElement('div')
            gameBox.classList.add('gameBox');
            gameBox.setAttribute('id',`box${i}`);
            gameGrid.appendChild(gameBox);
            const markerImgBox = document.createElement('img')
            markerImgBox.classList.add('emptyBox')
            gameBox.appendChild(markerImgBox)
            gameBox.addEventListener('click', ()=>{
                if(this.playerMarker == 'x'){
                    gamePlay.splice(i,1,'x');
                    markerImgBox.classList.add('cross', 'selectedBox');
                    checkWin(gamePlay);
                }else if (this.playerMarker == 'o'){
                    gamePlay.splice(i,1,'o');
                    markerImgBox.classList.add('nought', 'selectedBox');
                    checkWin(gamePlay);
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
    return{ gamePlay }
})();

//sets player marker
const player = (() => {
    const btnCross = document.querySelector('.btnCross');
    const btnNought = document.querySelector('.btnNought');
    btnCross.addEventListener('click', ()=> {
        if(this.playerMarker == null){
            this.playerMarker = 'x';
            btnCross.classList.toggle('selectedMarker')
            console.log('cross selected')
        }
    })
    btnNought.addEventListener('click', ()=> {
        if(this.playerMarker == null){
        this.playerMarker = 'o';
        btnNought.classList.toggle('selectedMarker')
        console.log('nought selected')
        }  
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
    if (playString.length == 9){
        console.log('tie')
    }else if (a && b && c == 'x'){
        return console.log("X win's")
    } else if (a && b && c == 'o'){
        return console.log("O win's")
    }else
    a = gamePlay[3]
    b = gamePlay[4]
    c = gamePlay[5]
    if (a && b && c == 'x'){
        return console.log("X win's")
    } else if (a && b && c == 'o'){
        return console.log("O win's")
    }else
    a = gamePlay[6]
    b = gamePlay[7]
    c = gamePlay[8]
    if (a && b && c == 'x'){
        return console.log("X win's")
    } else if (a && b && c == 'o'){
        return console.log("O win's")
    }else
    a = gamePlay[0]
    b = gamePlay[3]
    c = gamePlay[6]
    if (a && b && c == 'x'){
        return console.log("X win's")
    } else if (a && b && c == 'o'){
        return console.log("O win's")
    }else
    a = gamePlay[1]
    b = gamePlay[4]
    c = gamePlay[7]
    if (a && b && c == 'x'){
        return console.log("X win's")
    } else if (a && b && c == 'o'){
        return console.log("O win's")
    }else
    a = gamePlay[2]
    b = gamePlay[5]
    c = gamePlay[8]
    if (a && b && c == 'x'){
        return console.log("X win's")
    } else if (a && b && c == 'o'){
        return console.log("O win's")
    }else
    a = gamePlay[0]
    b = gamePlay[4]
    c = gamePlay[8]
    if (a && b && c == 'x'){
        return console.log("X win's")
    } else if (a && b && c == 'o'){
        return console.log("O win's")
    }else
    a = gamePlay[2]
    b = gamePlay[4]
    c = gamePlay[6]
    if (a && b && c == 'x'){
        return console.log("X win's")
    } else if (a && b && c == 'o'){
        return console.log("O win's")
    }  
};

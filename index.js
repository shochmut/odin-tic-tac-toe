//this is a module pattern - wrapping a factory function inside an IIFE (immediately invoked function expression)
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    const getFields = (num, text) => {
        // num is the index of the gameboard cells from left to right, top to bottom
        // text is the value that is placed in the field
        const htmlField = document.querySelector(`.game-board button:nth-child(${num+1}) p`);
        htmlField.innerHTML = text;
    }

    const setField = (sign) => {
        board[index] = `${sign}`;
    }
    
    return { board, getFields, setField };
})();

const displayController = (() => {
    const fieldCells = document.querySelectorAll('.cell');

    const updateFields = () => {
        //setFields uses getFields to loop through each applicable DOM element on the gameboard and populate with board array
        for (let i=0; i<gameBoard.board.length; i++) {
            gameBoard.getFields(i, gameBoard.board[i]);
        }
    };

    const cellListener = (() => {
        fieldCells.forEach((cell, index) => {
            cell.addEventListener('click', (e) => {
                if (cell.classList.contains('inactive')) {
                    gameBoard.board[index] = gameController.getCurrentPlayerSign();
                    gameController.nextRound();
                    updateFields();
                    cell.classList.add('active');
                    cell.classList.remove('inactive');
                    gameController.checkWin();
                }
            })
        })
    })();

    

})();

const Player = (sign) => {
    const playerSign = sign;


    const getPlayerSign = () => {
        return playerSign;
    }
    return { getPlayerSign }
}

const gameController = (() => {
    // all logic to control the game flow is contained within this module
    let round = 1;  // initialize round counter
    const playerX = Player('x');
    const playerY = Player('y'); 

    const signListener = () => {
        let btns = document.querySelectorAll('.sign-chooser')
        let sign = 'test';
        btns.forEach((button) => {
            button.addEventListener('click', (e) => {
                sign = e.target.value.toLowerCase();
            })
        })
        return { sign };
    }

    const nextRound = () => {
        round += 1;
        return round;
    }

    const getCurrentPlayerSign = () => {
        if (round % 2 !== 0) {
            return playerX.getPlayerSign();
        }
        else {
            return playerY.getPlayerSign();
        } 
    }

    const checkWin = () => {
        const winCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        const allEqual = arr => arr.every(val => val === arr[0]);

        winCombos.forEach((combo) => {
            console.log(...combo)
            gameBoard.board.map()
            if ( !gameBoard.board[...combo].includes('') && allEqual(gameBoard.board[combo]) ) {
                console.log('win')
            }
        })
    }




    return { signListener, nextRound, getCurrentPlayerSign, checkWin };
})();



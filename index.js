//this is a module pattern - wrapping a factory function inside an IIFE (immediately invoked function expression)
const gameBoard = (() => {
    const board = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X'];
    const getFields = (num, text) => {
        // num is the index of the gameboard cells from left to right, top to bottom
        // text is the value that is placed in the field
        const htmlField = document.querySelector(`.game-board button:nth-child(${num+1}) p`);
        htmlField.innerHTML = text;
    }
    
    return { board, getFields };
})();

const displayController = (() => {
    const setFields = (() => {
        //setFields uses getFields to loop through each applicable DOM element on the gameboard and populate with board array
        for (let i=0; i<gameBoard.board.length; i++) {
            gameBoard.getFields(i, gameBoard.board[i]);
        }
    })();


})();

const Player = (name, sign) => {
    const playerName = name;
    const playerSign = sign;

    return { }
}

const gameController = (() => {
    const signListener = (() => {
        let btns = document.querySelectorAll('.sign-chooser')
        console.log(btns)
        btns.forEach((button) => {
            button.addEventListener('click', (e) => {
                sign = e.target.innerHTML.toLowerCase();
                console.log(sign)
            })
        })
    })()
})();



//this is a module pattern - wrapping a factory function inside an IIFE (immediately invoked function expression)
const gameBoard = (() => {
    const board = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X'];
    const setFields = (num, text) => {
        // num is the index of the gameboard cells from left to right, top to bottom
        // text is the value that is placed in the field
        const htmlField = document.querySelector(`.game-board button:nth-child(${num+1}) p`);
        htmlField.innerHTML = text;
    }

    return { board, setFields };
})();

const displayController = (() => {

})


// event listener to populate the gameboard with board array
for (let i=0; i<gameBoard.board.length; i++) {
    gameBoard.setFields(i, gameBoard.board[i])

}


document.getElementById('gameboard').innerHTML = gameBoard.board;

import {useState} from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function GameBoard({onSelectSquare, turns, /*activePlayerSymbol*/}) {

    let gameBoard = initialGameBoard;

    /*const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        // console.log(rowIndex, colIndex);
        setGameBoard(
            (prevGameBoard) => {
                const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
                updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
                return updatedBoard;
            }
        );

        onSelectSquare();
    }*/

    // console.log("turns: ", turns);
    for (const turn of turns) {
        // console.log("turn: ", turn);
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {
                gameBoard.map(
                    (row, rowIndex) => <li key={rowIndex}>
                        <ol>
                            {
                                row.map(
                                    (playerSymbol, colIndex) => (
                                        /*<li key={colIndex}>
                                            <button
                                                onClick={() => handleSelectSquare(rowIndex, colIndex)}
                                            >
                                                {playerSymbol}
                                            </button>
                                        </li>*/
                                        <li key={colIndex}>
                                            <button
                                                onClick={() => onSelectSquare(rowIndex, colIndex)}
                                                disabled={playerSymbol !== null}
                                            >
                                                {playerSymbol}
                                            </button>
                                        </li>
                                    )
                                )
                            }
                        </ol>
                    </li>
                )
            }
        </ol>
    )
}

export default GameBoard;
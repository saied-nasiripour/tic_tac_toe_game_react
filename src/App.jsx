import {useState} from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";

function deriveActivePlayer(gameTurns) {
    /*console.log("prevTurns - gameTurns: ", gameTurns);
    if (gameTurns.length > 0)
    {
        console.log("prevTurns[0] player: ", gameTurns[0].player);
    }*/

    let currentPlayer = 'X';
    if ( gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
    }

    return currentPlayer;
}

function App() {

    const [gameTurns, setGameTurns] = useState([]);
    // const [activePlayer, setActivePlayer] = useState('X');

    const activePlayer = deriveActivePlayer(gameTurns);
    
    function handleSelectSquare(rowIndex, colIndex) {
        // setActivePlayer((currentlyActivePlayer) => currentlyActivePlayer === 'X' ? 'O' : 'X');
        setGameTurns(
            prevTurns => {

                const currentPlayer = deriveActivePlayer(prevTurns)
                console.log("current Player: ", currentPlayer);

                return [
                    {
                        square: {row: rowIndex, col: colIndex},
                        player: currentPlayer,
                    },
                    ...prevTurns
                ];
            }
        );
    }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 2" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 1" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
        <Log turns={gameTurns}/>
    </main>
  );
}

export default App;

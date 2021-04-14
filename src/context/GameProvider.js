import React, { useState } from 'react';
import GameContext from './GameContext';

function GameProvider({ children }) {
  const [gameState, setGameState] = useState({
    activePlayer: 1,
    gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  })

  const resetGame = () => {
    setGameState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
  }

  const toggleActivePlayer = () => {
    if (gameState.activePlayer === 1) return 2;
    return 1;
  }

  const updateState = (cellClicked) => {
    setGameState((state) => {
      const newState = [...state.gameBoard];
      let newActivePlayer = state.activePlayer;

      if (state.gameBoard[cellClicked] === 0) {
        newState[cellClicked] = state.activePlayer;
        newActivePlayer = toggleActivePlayer();
      } else newState[cellClicked] = state.gameBoard[cellClicked];

      return {
        activePlayer: newActivePlayer,
        gameBoard: newState,
      };
    });
  }

  const context ={
    gameState,
    resetGame,
    updateState,
  }

  return(
    <GameContext.Provider value={ context }>
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider;
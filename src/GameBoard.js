import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import './GameBoard.css';
import GameContext from './context/GameContext';

function GameBoard() {
  const { gameState } = useContext(GameContext);
  return (
    <div className="game-board">
      {gameState.gameBoard.map((playerId, i) => (
        <GameCell
          id={i}
          key={i}
          content={playerId}
        />
      ))}
    </div>
  );
}

export default GameBoard;
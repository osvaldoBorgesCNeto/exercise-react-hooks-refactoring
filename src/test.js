import React, { useContext } from 'react';
import GameContext from './context/GameContext';
import GameBoard from './GameBoard';

function TicTacToe() {
  const { gameState, resetGame } = useContext(GameContext);
  console.log(gameState)

  const victoryArchivedInLine = (gameBoard) => {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gameBoard[i] === gameBoard[i + 1]
        && gameBoard[i + 1] === gameBoard[i + 2]
        && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  }

  const victoryArchivedInColumn = (gameBoard) => {
    for (let i = 0; i <= 2; i += 1) {
      if (
        gameBoard[i] === gameBoard[i + 3]
        && gameBoard[i + 3] === gameBoard[i + 6]
        && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  }

  const victoryArchivedInDiagonals = (gameBoard) => {
    if (gameBoard[4] === 0) return false;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      return gameBoard[0];
    }
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      return gameBoard[2];
    }
    return false;
  }

  const victoryArchieved = (gameBoard) => {
    return (
      victoryArchivedInLine(gameBoard)
      || victoryArchivedInColumn(gameBoard)
      || victoryArchivedInDiagonals(gameBoard)
    );
  }

  const renderButton = () => {
    return (
      <button
        type="button"
        onClick={resetGame}
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  }

  const win = victoryArchieved(gameState.gameBoard);
  if (!gameState.gameBoard.includes(0) && !win) {
    return (
      <>
        {renderButton()}
        <h1>Empate</h1>
      </>
    );
  }
  return (
    <>
      {renderButton()}
      {(!win)
        ? (<GameBoard />)
        : <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>}
    </>
  );
}

export default TicTacToe;

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

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default GameBoard;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';
import GameContext from './context/GameContext';

function GameCell({content, id }) {
  const { updateState } = useContext(GameContext);

  if (content === 1) {
    return (
      <div
        data-testid={`cell_${id}`}
        className="game-cell"
        onClick={() => updateState(id)}
        role="button"
        tabIndex="0"
        aria-label="Cell"
        onKeyPress={() => updateState(id)}
      >
        <img data-testid={`cell_${id}_image`} alt="X" src={xImage} />
      </div>
    );
  }
  if (content === 2) {
    return (
      <div
        data-testid={`cell_${id}`}
        className="game-cell"
        onClick={() => updateState(id)}
        role="button"
        tabIndex="0"
        aria-label="Cell"
        onKeyPress={() => updateState(id)}
      >
        <img data-testid={`cell_${id}_image`} alt="O" src={oImage} />
      </div>
    );
  }
  return (
    <div
      role="button"
      tabIndex="0"
      aria-label="Cell"
      onKeyPress={() => updateState(id)}
      data-testid={`cell_${id}`}
      className="game-cell"
      onClick={() => updateState(id)}
    />
    );
}

GameCell.propTypes = {
  content: PropTypes.oneOf([0, 1, 2]),
  updateState: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

GameCell.defaultProps = {
  content: 0,
};
export default GameCell;

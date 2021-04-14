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
  id: PropTypes.number.isRequired,
};

GameCell.defaultProps = {
  content: 0,
};
export default GameCell;
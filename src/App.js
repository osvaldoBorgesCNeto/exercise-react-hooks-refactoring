// src/App.js

import React from 'react';
import TicTacToe from './TicTacToe';
import './App.css';
import GameProvider from './context/GameProvider';

function App() {
  return (
    <GameProvider>
      <TicTacToe />
    </GameProvider>
  )
}

export default App;

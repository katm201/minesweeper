import React from 'react';

import Board from '../containers/Board';
import CreateGame from '../containers/CreateGame';

const Main = () => (
  <div className="main-container">
    <Board className="board-wrapper wrapper" />
    <CreateGame className="create-game-wrapper wrapper" />
  </div>
);

export default Main;

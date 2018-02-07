import React from 'react';

import Board from '../containers/Board';
import CreateGame from '../containers/CreateGame';

const Main = () => (
  <div className="main">
    Main Component
    <Board className="board-wrapper" />
    <CreateGame className="create-game-wrapper" />
  </div>
);

export default Main;

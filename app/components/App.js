import React from 'react';

import Main from './Main';

const App = () => (
  <div className="app">
    <header className="header row">
      <div className="title">
        Minesweeper
      </div>
    </header>
    <Main className="main row" />
    <footer className="footer row">
      <div className="small-info">
        { `${String.fromCharCode(169)} Katherine Manning` }
      </div>
    </footer>
  </div>
);

export default App;

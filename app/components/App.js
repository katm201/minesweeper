import React from 'react';

const App = () => (
  <div className="app">
    <header className="header">
      <div className="title">
        Minesweeper
      </div>
    </header>
    <footer className="footer">
      <div className="small-info">
        { `${String.fromCharCode(169)} Katherine Manning` }
      </div>
    </footer>
  </div>
);

export default App;

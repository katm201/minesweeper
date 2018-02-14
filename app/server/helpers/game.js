
class Board {
  constructor(side, mines) {
    this.side = side;
    this.mines = mines;
    this.locations = {};
    this.cells = [];
    this.init();
  }

  init() {
    this.create();
    this.arm();
    /* this.fill(); */
  }

  // builds an empty board;
  create() {
    for (let i = 0; i < this.side; i += 1) {
      const row = [];

      for (let j = 0; j < this.side; j += 1) {
        row.push(0);
      }

      this.cells.push(row);
    }
  }

  // randomly assigns mines, then fills them in on the empty board
  arm() {
    const createMines = (minesLeft = this.mines) => {
      if (minesLeft === 0) {
        return;
      }

      const row = Math.floor(Math.random() * this.mines);
      const col = Math.floor(Math.random() * this.mines);
      const key = `${row},${col}`;

      if (this.locations[key]) {
        createMines(minesLeft);
      } else {
        this.locations[key] = [row, col];
        createMines(minesLeft - 1);
      }
    };

    createMines();

    const keys = Object.keys(this.locations);

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const [row, col] = this.locations[key];
      this.cells[row][col] = 'M';
    }
  }

  // fills in the mine count for adjacent blocks
  /* fill() {

  } */
}

const Game = function (type) {
  const game = {
    status: 'in-progress',
  };

  const side = type === 'Beginner' ? 9 : 16;
  const mines = type === 'Beginner' ? 10 : 40;

  const board = new Board(side, mines);

  game.checkLoss = function (/* piece */) {
    // body...
  };

  game.checkWin = function () {
    // body...
  };

  game.revealPiece = function (/* piece */) {
    //
  };

  game.revealBoard = function () {
    game.status = 'complete';
    return board;
  };

  return game;
};

export default Game;

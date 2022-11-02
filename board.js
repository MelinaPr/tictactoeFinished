module.exports = {
  getEmptyBoard: function () {
    /*
        Should return a list with 3 sublists.
        Each sublist should contain 3 time the "." character
        */

    let A = [".", ".", "."];
    let B = [".", ".", "."];
    let C = [".", ".", "."];

    return [A, B, C];
  },

  //  get_ABC: function (letters) {
  //   let a = ['A'];
  //   let b = ['B'];
  //   let c = ['C'];

  //   return [a, b, c];
  //  },

  displayBoard: function (board) {
    /*
        Should console.log the tic tac toe board in a format similar to
            1   2   3
            A   X | O | . 
            ---+---+---
            B   X | O | .
            --+---+---
            C   0 | X | . 
            --+---+---
        */

    // console.log(board[0]);
    // console.log(board[1]);
    // console.log(board[2]);

    for (let i = 0; i < board.length; i++) {
      if (i === 0) {
        console.log("  1   2   3");
      }

      let row = " ";
      let boardRow = board[i];

      let rowLetter;
      if (i === 0) {
        rowLetter = "A";
      } else if (i === 1) {
        rowLetter = "B";
      } else {
        rowLetter = "C";
      }

      row = `${rowLetter} ${boardRow[0]} | ${boardRow[1]} | ${boardRow[2]} `;
      // console.log(board);
      // console.log(board.length);
      // console.log(boardRow);

      console.log(row);
      if (i !== 2) {
        console.log(" ---+---+---");
      }
    }
  },

  isBoardFull: function (board) {
    /*
        should return True if there are no more empty place on the board,
        otherwise should return False
        */
    let flatBoard = [...board[0], ...board[1], ...board[2]]
    for (let i = 0; i < flatBoard.length; i++) { 
      if (flatBoard[i].includes(".")) {
        return false;
      }
    } 
    return true;
  },

  getWinningPlayer: function (board) {
    if (
      board[0][0] == board[0][1] &&
      board[0][0] == board[0][2] &&
      board[0][0] !== `.`
    ) {
      console.log(`test`)
      return `Player ${board[0][0]} wins!`;
    } else if (
      board[1][0] == board[1][1] &&
      board[1][0] == board[1][2] &&
      board[1][0] !== `.`
    ) {
      return `Player ${board[1][0]} wins!`;
    } else if (
      board[2][0] == board[2][1] &&
      board[2][0] == board[2][2] &&
      board[2][0] !== `.`
    ) {
      return `Player ${board[2][0]} wins!`;
    } else if (
      board[0][0] == board[1][0] &&
      board[0][0] == board[2][0] &&
      board[0][0] !== `.`
    ) {
      return `Player ${board[0][0]} wins!`;
    } else if (
      board[0][1] == board[1][1] &&
      board[0][1] == board[2][1] &&
      board[0][1] !== `.`
    ) {
      return `Player ${board[0][1]} wins!`;
    } else if (
      board[0][2] == board[1][2] &&
      board[0][2] == board[2][2] &&
      board[0][2] !== `.`
    ) {
      return `Player ${board[0][2]} wins!`;
    } else if (
      board[0][0] == board[1][1] &&
      board[0][0] == board[2][2] &&
      board[0][0] !== `.`
    ) {
      return `Player ${board[0][0]} wins!`;
    } else if (
      board[0][2] == board[1][1] &&
      board[0][2] == board[2][0] &&
      board[0][2] !== `.`
    ) {
      return `Player ${board[0][2]} wins!`;
    } else {
      return false;
    }
    /*
      Should return the player that wins based on the tic tac toe rules.
      If no player has won, than "None" is returned.
      */
  },
};
function checkBoards() {
  let board = module.exports.getEmptyBoard();
  // console.log(board);
  // run this function to test whether you have correctly implemented the other function
  board = [
    ["X", "O", "."],
    ["X", "O", "."],
    ["0", "X", "."],
  ];

  console.log(`Should give out:"
        1   2   3
    A   X | O | . 
       ---+---+---
    B   X | O | .
       ---+---+---
    C   0 | X | . 
       ---+---+---`);
  module.exports.displayBoard(board);

  board_1 = [
    ["X", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("Should return False");
  console.log(module.exports.isBoardFull(board_1));

  board_2 = [
    [".", "O", "O"],
    [".", "O", "X"],
    [".", "X", "X"],
  ];
  console.log("Should return False");
  console.log(module.exports.isBoardFull(board_2));

  board_3 = [
    ["O", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"],
  ];
  console.log("Should return True");
  console.log(module.exports.isBoardFull(board_3));

  board_4 = [
    ["X", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("Should return X");
  console.log(module.exports.getWinningPlayer(board_4));

  board_5 = [
    ["X", "O", "O"],
    ["X", "O", "."],
    ["O", "X", "X"],
  ];
  console.log("Should return O");
  console.log(module.exports.getWinningPlayer(board_5));

  board_6 = [
    ["O", "O", "."],
    ["O", "X", "."],
    [".", "X", "."],
  ];
  console.log("Should return None");
  console.log(module.exports.getWinningPlayer(board_6));
}

// module.exports.getEmptyBoard();
// let board = module.exports.getEmptyBoard();
// module.exports.displayBoard(board);

// module.exports.getWinningPlayer(board);
// checkBoards();

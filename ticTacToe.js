const menu = require("./menu"); // use it e.g. like menu.get_menu_option()
const boardModule = require("./board");
const coordinate = require("./coordinates");

const HUMAN_VS_HUMAN = 1;
const RANDOM_AI_VS_RANDOM_AI = 2;
const HUMAN_VS_RANDOM_AI = 3;
const HUMAN_VS_UNBEATABLE_AI = 4;

function main() {
  let gameMode = menu.getMenuOption();
  let gameBoard = boardModule.getEmptyBoard();
  let isGameRunning = true;

  let player1 = "O";
  let player2 = "X";
  let currentPlayer = player1;
  while (isGameRunning) {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }

    let winningPlayer = boardModule.getWinningPlayer(gameBoard);
    let input;
    if (winningPlayer !== false) {
      console.log(winningPlayer);
      process.exit();
    }
    let itsATie = boardModule.isBoardFull(gameBoard);
    if (itsATie == true) {
      console.log(`It's a tie!`);
      process.exit();
    }
    if (gameMode == `1`) {
      input = coordinate.getCoordinates();
      console.log(input);
      getHumanMove(gameBoard, currentPlayer, input);
    } else if (gameMode == `3`) {
      if (currentPlayer == player1) {
        input = coordinate.getCoordinates();
        console.log(input);
        getHumanMove(gameBoard, currentPlayer, input);
      } else if (currentPlayer == player2) {
        coordinate.getRandomAiCoordinates(gameBoard, currentPlayer);
      }
    }

    function getHumanMove(gameBoard, currentPlayer, input) {
      if (input === "A1" && gameBoard[0][0] == `.`) {
        gameBoard[0][0] = currentPlayer;
      } else if (input === "A2" && gameBoard[0][1] == `.`) {
        gameBoard[0][1] = currentPlayer;
      } else if (input === "A3" && gameBoard[0][2] == `.`) {
        gameBoard[0][2] = currentPlayer;
      } else if (input === "B1" && gameBoard[1][0] == `.`) {
        gameBoard[1][0] = currentPlayer;
      } else if (input === "B2" && gameBoard[1][1] == `.`) {
        gameBoard[1][1] = currentPlayer;
      } else if (input === "B3" && gameBoard[1][2] == `.`) {
        gameBoard[1][2] = currentPlayer;
      } else if (input === "C1" && gameBoard[2][0] == `.`) {
        gameBoard[2][0] = currentPlayer;
      } else if (input === "C2" && gameBoard[2][1] == `.`) {
        gameBoard[2][1] = currentPlayer;
      } else if (input === "C3" && gameBoard[2][2] == `.`) {
        gameBoard[2][2] = currentPlayer;
      }
    }
    boardModule.displayBoard(gameBoard);
  }
  // console.log(gameBoard[0][0]);

  /* TODO
        based on the value of the variables `game_mode` and `currentPlayer` 
        the programm should should choose betwen the functions
        get_random_ai_coordinates or get_umbeatable_ai_coordinates or get_human_coordinates
        */

  // let humanCoord = coordinate.getCoordinates(board, currentPlayer);

  // gameBoard[humanCoord[0]][humanCoord[1]] = currentPlayer;

  /* TODO 
        based on the values of `winning_player` and `its_a_tie` the program
        should either stop displaying a winning/tie message 
        OR continue the while loop
        */

  if (winningPlayer !== false) {
    console.log(winningPlayer);
    process.exit();
  }
  if (itsATie == true) {
    console.log(`It's a tie!`);
    process.exit();
  }
}

main();

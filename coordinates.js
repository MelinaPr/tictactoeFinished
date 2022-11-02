const board = require("./board");

const prompt = require("prompt-sync")();

//Print
function getCoordinates() {
  // e.g. A1, A2, B3, C2

  let coordinates = prompt('please enter the coordinate: ');
  let coordinateUppercased = coordinates.toUpperCase();

  if (coordinateUppercased === "QUIT") {
    console.log("GOOD BYE");
    process.exit();
  }

  while (coordinateUppercased !== "A1" && coordinateUppercased !== "A2" && coordinateUppercased !== "A3" && coordinateUppercased !== "B1" && coordinateUppercased !== "B2" && coordinateUppercased !== "B3" && coordinateUppercased !== "C1" && coordinateUppercased !== "C2" && coordinateUppercased !== "C3") {
    coordinates = prompt('please enter the coordinate from A1, A2, A3, B1, B2, B3, C1, C2 ,C3: ');
    coordinateUppercased = coordinates.toUpperCase();
    if (coordinateUppercased === "QUIT") {
      console.log("GOOD BYE");
      process.exit();
    }
  }

  // valid input
  return coordinateUppercased;
}






  getCoordinates : getCoordinates,

  function getPlayerMove (board, current_player) {


    /*
        Should return the read coordinateUppercased for the tic tac toe board from the terminal.
        The coordinates should be in the format  letter, number where the letter is 
        A, B or C and the number 1, 2 or 3.
        If the user enters an invalid coordinate (like Z0 or 1A, A11, sadfdsaf) 
        than a warning message should appear and the coordinates reading process repeated.
        If the user enters a coordinate that is already taken on the board.
        than a warning message should appear and the coordinates reading process repeated.
        If the user enters the word "quit" in any format of capitalized letters the program
        should stop.
        */
  }

  function getRandomAiCoordinates (board, current_player) {
    let randomAiMove;
      randomAiMove = Math.floor(Math.random() * 9);
      console.log(randomAiMove)
      if(randomAiMove == 0 && board[0][0] == `.`){
        board[0][0] = current_player
      } if(randomAiMove == 1 && board[0][1] == `.`){
        board[0][1] = current_player
      } if(randomAiMove == 2 && board[0][2] == `.`){
        board[0][2] = current_player
      } if(randomAiMove == 3 && board[1][0] == `.`){
        board[1][0] = current_player
      } if(randomAiMove == 4 && board[1][1] == `.`){
        board[1][1] = current_player
      } if(randomAiMove == 5 && board[1][2] == `.`){
        board[1][2] = current_player
      } if(randomAiMove == 6 && board[2][0] == `.`){
        board[2][0] = current_player
      } if(randomAiMove == 7 && board[2][1] == `.`){
        board[2][1] = current_player
      } if(randomAiMove == 8 && board[2][2] == `.`){
        board[2][2] = current_player
      }

    
    /*
        Should return a tuple of 2 numbers. 
        Each number should be between 0-2.
        The chosen number should be only a free coordinate from the board.
        If the board is full (all spots taken by either X or O) than "None"
        should be returned.
        */
  };

  function getUnbeatableAiCoordinates (board, current_player) {
    /*
        Should return an array of 2 numbers. 
        Each number should be between 0-2.
        The chosen number should be only a free coordinate from the board.
        The chosen coordinate should always stop the other player from winning or
        maximize the current player's chances to win.
        If the board is full (all spots taken by either X or O) than "None"
        should be returned.
        */
  }
module.exports = {getCoordinates: getCoordinates, getRandomAiCoordinates: getRandomAiCoordinates};

// run this function to test whether you have correctly implemented the other functions
function checkCoordinates() {
  board_1 = [
    ["X", "X", "."],
    ["X", ".", "."],
    ["X", "X", "."],
  ];
  console.log(
    "It should console.log the coordinates selected by the human player"
  );
  coordinates = getPlayerMove(board_1, "X");
  console.log(coordinates);

  board_2 = [
    ["O", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));

  board_3 = [
    ["O", "X", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
  ];
  console.log("The console.loged coordinate should be None");
  console.log(getRandomAiCoordinates(board_3));

  board_4 = [
    [".", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("The console.loged coordinate should always be (0, 0)");
  console.log(getUnbeatableAiCoordinates(board_4, "X"));

  board_5 = [
    ["X", "O", "."],
    ["X", ".", "."],
    ["O", "O", "X"],
  ];
  console.log("The console.loged coordinate should always be (1, 1)");
  console.log(getUnbeatableAiCoordinates(board_5, "O"));

  board_6 = [
    ["O", "O", "."],
    ["O", "X", "."],
    [".", "X", "."],
  ];
  console.log("The console.loged coordinate should either (0, 2) or (2, 0)");
  console.log(getUnbeatableAiCoordinates(board_6));
}
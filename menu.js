const prompt = require("prompt-sync")();

  function getMenuOption() {
    console.log(`Please choose one of the following options:`);
    console.log(`1. Human vs. Human`);
    console.log(`2. Random AI vs. Random AI`);
    console.log(`3. Human vs. Random AI`);
    console.log(`4. Human vs. Unbeatable AI`);
    let choice = prompt();

    if (choice === `1` || choice === `2` || choice === `3` || choice === `4`) {
      return choice;
    } else {
      console.log(`Choose a valid option`);
      getMenuOption();
    }
    /*
        Should print a menu with the following options:
        1. Human vs Human
        2. Random AI vs Random AI
        3. Human vs Random AI
        4. Human vs Unbeatable AI
        The function should return a number between 1-4.
        If the user will enter invalid data (for example 5), than a message will appear
        asking to input a new value.
        */
  }

  /*function checkOptions() {
  let option = getMenuOption();
  console.log("If the user selected 1, it should print 1");
  console.log(option);
}
*/


module.exports = {"getMenuOption": getMenuOption}

// run this function to test whether you have correctly implemented the other function

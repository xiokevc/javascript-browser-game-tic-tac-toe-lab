// MIN. REQUIREMENTS
// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Display whose turn it is (X or O).
// The cell cannot be played again once occupied with an X or O.
// Provide win logic and display a winning message.
// Provide logic for a cat’s game (tie), also displaying a message.
// Provide a Reset Game button that will clear the contents of the board.

//PSUEDOCODE
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

// Step 1
// Define the required variables used to track the state of the game.

// 💡 None of these variables will need to hold a value when they are defined.

// a. Use a variable named board to represent the state of the squares on the board.

// b. Use a variable named turn to track whose turn it is.

// c. Use a variable named winner to represent if anyone has won yet.

// d. Use a variable named tie to represent if the game has ended in a tie.

// Step 2
// Store cached element references.

// a. In a constant called squareEls, store the nine elements representing the squares on the page.

// 💡 Notice how each square has a matching class name in your HTML to make this easier!

// b. In a constant called messageEl, store the element that displays the game’s status on the page.

// 🚨 Don’t forget to console.log() your cached element references to ensure you’ve grabbed the correct elements!

// Step 3
// Upon loading, the game state should be initialized, and a function should be called to render this game state.

// a. Create a function called init.

// b. Call the init function when the app loads.

// 🚨 Add a console.log() as a confirmation check inside this function. This helps to ensure you’re calling the function you just created correctly!

// c. Set the board variable to an array containing nine empty strings ('') representing empty squares.

// 💡 The nine elements in the board array will correspond to a square on the board. Index 0 (board[0]) will represent the top-left square. Index 1 (board[1]) will represent the top-middle square. Index 2 (board[2]) will represent the top-right square. Index 3 (board[3]) will represent the middle-left square. So on, continuing through the entire board until… Index 8 (board[8]) will represent the bottom-right square.

// d. Set the turn to the uppercase string "X" - this will represent player X.

// 💡 Player O will be represented by uppercase "O".

// e. Set the winner to false.

// 💡 A false value in winner means that there is no winner yet. A value of true in winner will mean that a player has won.

// Once winner is set to true, we can determine which player won by whose turn it was when the winning move was played.

// f. Set tie to false.

// 💡 A true value in tie will mean that the board array contains no more empty strings ('') and will be used to render a tie message if winner is still false by the time all squares are played.

// g. Call a function named render() at the end of the init() function.

// 🚨 This will throw an error until you complete step 4a!

// Step 4
// The state of the game should be rendered to the user.

// a. Create a function called render, then set it aside for now.

// b. Create a function called updateBoard.

// c. In the updateBoard function, loop over board and for each element:

// Use the current index of the iteration to access the corresponding square in the squareEls.

// 📖 Check out the MDN documentation on forEach() to help out with this! What do you have access to in the callback function that could help with this?

// Style that square however you wish, dependent on the value contained in the current cell being iterated over ('X', 'O', or ''). To keep it simple, start by just putting a letter in each square depending on the value of each cell.

// d. Create a function called updateMessage.

// e. In updateMessage, render a message based on the current game state:

// If both winner and tie have a value of false (meaning the game is still in progress), render whose turn it is.
// If winner is false, but tie is true, render a tie message.
// Otherwise, render a congratulatory message to the player that has won.
// f. Invoke both the updateBoard and the updateMessage functions inside your render function.

// Step 5
// Define the required constants.

// a. In a constant called winningCombos, define the eight possible winning combinations as an array of arrays.

// Step 6
// Handle a player clicking a square with a handleClick function.

// a. Create a function called handleClick. It will have an event parameter.

// b. Attach an event listener to the game board using one of the two options below. The first option is the standard path, and the second is the Level Up path.

// Ensure you choose only one path.

// Option 1: Add an event listener to each of the existing squareEls with a loop. Set up the event listener to respond to the 'click' event. The event listener should call the handleClick function you created in step 6a.

// Option 2 - Level Up 🚀: Add a new cached element reference that will allow you to take advantage of event bubbling. Set up an event listener on it that responds to the 'click' event. On the 'click' event, it should call the handleClick function you created in step 6a. If you use this method, you’ll need to ensure the element the user clicks is a square! If they click anywhere else on the board, return out of the function to disallow the move. This can be accomplished more easily once you obtain the index of the square clicked in the next step!

// c. Obtain the index of the clicked square. To do this, get the index from an id assigned to the target element in the HTML. Assign this to a constant called squareIndex.

// 💡 Each id corresponds with an index in our board array.

// d. If the board has a value of 'X' or 'O' at the squareIndex position, immediately return out of handleClick. That square is already taken. Also, if winner is true, immediately return out of handleClick because the game is over.

// Next, we will create a collection of smaller functions to break down the remaining functionality of our handleClick function. These functions will live in the global scope. They will also be invoked in a specific order inside of our handleClick function.

// 6.1 - placePiece()
// a. Create a function named placePiece that accepts an index parameter.

// b. Update the board array at the index so that it is equal to the current value of turn.

// 💡 For testing purposes, on the line immediately after you’ve updated the board array, add a console log of the board array.

// c. In the handleClick function, call the placePiece function you just created. Pass squareIndex to it as an argument.

// 💡 If you added a console log above, you should now be able to click spaces on the board, and the corresponding space in the board array should change from a '' to a 'X'.

// 6.2 - checkForWinner()
// a. Create a function called checkForWinner.

// b. Determine if a player has won using one of the two options below. The first option is the standard path, and the second option is the Level Up path.

// Ensure you choose only one path.

// Option 1 This option won’t take advantage of the winningCombos array, but using it as a reference will help you build a solution.

// For each winning combination, you’ll check if the first position is something other than an empty string. If it is, you’ll check if the value in the first position matches the value in the second position. If it is, you’ll check if the value in the first position matches the value in the third position. If it is, then you’ll have a winner! Let’s break that down step-by-step:

// Reference the winning combinations you wrote in step 5 and the board array. Use the three values in each winning combination to retrieve the values held in those index positions of the board array.

// For example, the first winning combination is [0, 1, 2], representing the top row. Using that winning combination as a guide, you’ll need to access the values held in the board array’s 0, 1, and 2 indexes.

// Check the following for each of the eight winning combinations:

// Check to see if the value held in the first position is not an empty string ''.

// Also, check to see if the value held in the first position equals the value held in the second position.

// Also, check to see if the value held in the first position equals the value held in the third position.

// If those three conditions are all true, then someone has won.

// If someone has won on any of the eight winning combinations, set winner to true.

// Option 2 - Level Up 🚀 This method takes advantage of the winningCombos array you wrote in step 5.

// Loop through each of the winning combination arrays defined in the winningCombos array. Use the three values in each winning combination to retrieve the values held in those index positions of the board array.

// For example, the first winning combination is [0, 1, 2], representing the top row. Using that winning combination as a guide, you’ll need to access the values held in the board array’s 0, 1, and 2 indexes.

// Check the following for each of the eight winning combinations:

// Check to see if the value held in the first position is not an empty string ''.

// Also, check to see if the value held in the first position equals the value held in the second position.

// Also, check to see if the value held in the first position equals the value held in the third position.

// If those three conditions are all true, then someone has won. Set winner to true.

// Win condition logic

// c. In the handleClick function, call the checkForWinner function immediately after calling the placePiece function.

// 💡 This function’s only job is to determine if there is a winner. For testing purposes, add a console log for winner after you’ve updated the winner state.

// If you click every space that makes up a single winning combination (for example, the top row) on the board, winner should become true.

// 6.3 - checkForTie()
// a. Create a function named checkForTie.

// b. Check if there is a winner. If there is, return out of the function.

// c. Check if the board array still contains any elements with a value of ''. If it does, we can leave tie as false. Otherwise, tie should be set to true.

// 💡 For testing purposes, add a console log for tie after you’ve updated the tie state.

// d. In the handleClick function, call the checkForTie function immediately after calling the checkForWinner function.

// 💡 This function’s only job is determining if all available moves have been played.

// If you click every space on the board so that the board array no longer has any empty strings (''), change the value of tie to true.

// 6.4 - switchPlayerTurn()
// a. Create a function called switchPlayerTurn.

// b. If winner is true, return out of the function - we don’t need to switch the turn anymore because the person that just played won!

// c. If winner is false, change the turn by checking the current value of turn. If it is 'X' then change turn to 'O'. If it is 'O' then change turn to 'X'.

// 💡 For testing purposes, add a console log for turn after you’ve updated the turn state.

// d. In the handleClick function, call the switchPlayerTurn function immediately after calling the checkForTie function.

// 💡 This function’s only job is to switch the turn after a player has made a selection and didn’t win.

// If you click a space on the board, turn should flip from 'X' to 'O' or from 'O' to 'X'.

// 6.5 - Tying it all together
// a. Finally, now that all the state has been updated, we need to render that updated state to the user by calling the render function we wrote earlier.

// 💡 Remember, we use render to call upon two other functions (updateBoard and updateMessage). Both of these functions deal with updating different aspects of the user interface.

// Technically, the code in each function could be moved directly inside render, but it makes sense to divide this logic based on the area of the user interface being altered.

// Your functions should accomplish as specific a task as possible.

// Step 7 - Create Reset functionality
// a. Add a reset button to the HTML document. Give it an id of reset.

// b. Store the new reset button element as a cached element reference in a constant named resetBtnEl.

// c. Attach an event listener to the resetBtnEl. On the 'click' event, it should call the init function you created in step 3.

// 💡 You’re done! As a final step, test the game out to ensure everything is working as expected. Consider edge cases, and use console logs to investigate your code if anything is behaving oddly.

// Also remove the console logs you added for testing purposes, they should no longer be necessary.


/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal top-left to bottom-right
  [2, 4, 6]  // diagonal top-right to bottom-left
];

/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square');
const messageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('reset');

/*-------------------------------- Functions --------------------------------*/

function init() {
  board = ['', '', '', '', '', '', '', '', '']; // 9 empty squares
  turn = 'X';
  winner = false;
  tie = false;
  render();
}

function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  board.forEach((value, index) => {
    squareEls[index].textContent = value;
    if (value) {
      squareEls[index].classList.add('taken');
    } else {
      squareEls[index].classList.remove('taken');
    }
  });
}

function updateMessage() {
  if (!winner && !tie) {
    messageEl.textContent = `It's ${turn}'s turn`;
  } else if (!winner && tie) {
    messageEl.textContent = "It's a tie!";
  } else {
    messageEl.textContent = `Player ${turn} wins!`;
  }
}

function handleClick(evt) {
  const squareIndex = parseInt(evt.target.id);

  // Guard clauses: ignore clicks if square taken or game won
  if (board[squareIndex] !== '' || winner) return;

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

function placePiece(index) {
  board[index] = turn;
}

function checkForWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      board[a] !== '' &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      winner = true;
      return;
    }
  }
  winner = false;
}

function checkForTie() {
  if (winner) return; // no tie if there's a winner
  tie = board.every(square => square !== '');
}

function switchPlayerTurn() {
  if (winner) return; // don't switch if game over
  turn = turn === 'X' ? 'O' : 'X';
}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => square.addEventListener('click', handleClick));

resetBtnEl.addEventListener('click', init);

/*--------------------------- Start the game! ---------------------------*/

init();
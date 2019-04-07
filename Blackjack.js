
//
// Blackjack
//

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
let values = ['Ace', 'King', 'Queen', 'Jack',
              'Ten', 'Nine', 'Eight', 'Seven', 'Six',
              'Five', 'Four', 'Three', 'Two'];

//Set up some variables to access the dom
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];


//We don't want to display the buttons yet
hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

//We want something to happen when we click on the new game bubtton
//This will be called every time the 'new game' button is pressed
newGameButton.addEventListener('click', function() {

  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];

  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline'; //We want them to show up on the same line
  showStatus();
});

hitButton.addEventListener('click', function() {
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});

stayButton.addEventListener('click', function() {
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});


//Create a function that uses a nested for loop to create a deck of cards
function createDeck() {
  let deck = []; //This is a local variable to this function
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      //Create 'card' object
      let card = {
        //Properties: suit and value
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      //Push each card object into the deck array
      deck.push(card);
    }
  }
  return deck;
}


function shuffleDeck(deck) {
  for (let i=0; i < deck.length; i++) {
    //Get a whole number that is between 0-51. Assign it to swapIdx
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    //Temporarily assign the card at swapIdx within deck to 'tmp'
    deck[swapIdx] = deck[i];
    //Swap this randomly chosen card with the card we're looking at in the loop
    deck[i] = tmp;
    //We're essentially swapping deck[i] with deck[swapIdx]
    //We needed the temporary variable in order to do this swap
  }
}

//Function to return string representation of card object
function getCardString(card) {
  return card.value + ' of ' + card.suit;
}

//Create a function which gets the next card
function getNextCard() {
  return deck.shift(); //shift() takes the first card in a list
}


function getCardNumericValue(card) {
  switch(card.value) {
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }
}


function checkForEndOfGame() {

  updateScores();

  if (gameOver) {
    //Let dealer take cards
    while(dealerScore < playerScore
          && playerScore <= 21
          && dealerScore <= 21) {
      dealerCards.push(getNextCard());
      updateScores();
  }
}

if (playerScore > 21) {
  playerWon = false;
  gameOver = true;
}
else if (dealerScore > 21) {
  playerWon = true;
  gameOver = true;
}
else if (gameOver) {
  if (playerScore > dealerScore) {
    playerWon = true;
  }
  else {
    playerWon = false;
  }
  }
}



function getScore (cardArray){
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'Ace') {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}


function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

//If the game hasn't started yet, execute the code
function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to Blackjack!';
    return;
  }

  let dealerCardString = '';
  for (let i = 0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + '\n';
  }

  let playerCardString = '';
  for (let i = 0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + '\n';
  }

  updateScores();

  textArea.innerText =
    'Dealer has:\n' +
    dealerCardString +
    '(Score: ' + dealerScore + ')\n\n' +

    'Player has:\n' +
    playerCardString +
    '(Score ' + playerScore + ')\n\n';

  if (gameOver){
    if (playerWon){
      textArea.innerText += 'You win!';
    }
    else {
      textArea.innerText += 'Dealer wins!';
    }
    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
  }
}

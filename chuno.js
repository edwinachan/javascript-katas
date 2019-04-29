//Create colours and numbers

colours = ['Red', 'Yellow', 'Green', 'Blue']
numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
numOfPlayers = 3
players = []


function createDeck() {
  deck = []
  for (let colourIdx = 0; colourIdx < colours.length; colourIdx++) {
    for (let numberIdx = 0; numberIdx < numbers.length; numberIdx++) {
      let card = {
        colour: colours[colourIdx],
        number: numbers[numberIdx]
      }
      deck.push(card)
    }
  }
  return deck
}

function shuffleDeck(deck) {
  for (let i=0; i < deck.length; i++) {
    //Get a whole number that is between 0-length of deck. Assign it to swapIdx
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

function getNextCard() {
  return deck.shift(); //shift() takes the first card in a list
}

function getCardString (card) {
  return card.colour + ' of ' + card.number //return string representation of card
}

function createPlayers (names) {
  for (i = 0; i < numOfPlayers; i++) {
    let player = {
      name: names[i],
      cards: [
        getNextCard(),
        getNextCard()]
    }
    players.push(player)
}
}

function getCardObject (listofCards) { //need to create loop which allows us to print each card in list 'cards'
  var string = ''

  for (i = 0; i < listofCards.length; i++) {
    string += getCardString(listofCards[i]) + '\n'
  }
  return string
}


function getPlayerAndCard (player) {
  return player.name + " has " + getCardObject(player.cards)
}

function playGame() {
  playerGoing = Math.floor(Math.random() * Math.floor(3))

  won = false

  while (won == false) {

  playerGoing = (playerGoing + 1) % players.length

  console.log(listOfNames[playerGoing] + " is going")
  console.log(getPlayerAndCard(players[playerGoing]))

  won = haveGo(deck)
  }

  if (won == true) {
    console.log(listOfNames[playerGoing] + " has won")
  }
}

function haveGo(deck) {

  console.log("Top of discard pile: " + getCardString(discardPile))

  var object = players[playerGoing].cards //list of cards for this player

  for (i = 0; i < object.length; i++) {

    var cardObject = object[i] //get ith element of 'cards' list

    if (cardObject.colour == discardPile.colour ||  cardObject.number == discardPile.number) {

      console.log(players[playerGoing].name + " has matched with " + getCardString(cardObject))

      discardPile = Object.assign({}, cardObject) //Copy matched card onto discardPile

      object.splice(i, 1) //Remove matched card from player's hand

      if (object.length === 0) {
        return true
      } else {return false} //Check if the player has run out of cards

    }
  }

    //If we don't match the discardPile, push new card object onto list
    players[playerGoing].cards.push(getNextCard())

    console.log('No cards matched, ' + getCardString(object[object.length-1]) + ' has been added to the hand')


  return false

}


deck = createDeck()
shuffleDeck(deck)
listOfNames = ['Ed', 'Eddie', 'Chan']
createPlayers(listOfNames)
discardPile = deck[deck.length - 1]
playGame()

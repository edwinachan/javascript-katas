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
      cards: {
        card1: getNextCard(), //each card is a property of the 'cards' object within 'player'
        card2: getNextCard()
      }
    }
    players.push(player)
  }
}

function getCardObject (object) { //need to create loop which allows us to print each card property in 'cards'
  var cardObject = Object.keys(object) //array of key strings, e.g. ["card1", "card2"]
  var string = ''
  for (i = 0; i < cardObject.length /*number of keys*/; i++) {
    string += getCardString(object[Object.keys(object)[i]]) + '\n'
  } //getCardString(x) allows us to index into 'cards' object, e.g.[0] would give us the value for the first property, i.e. value of card1 which is in itself a card object
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

  var object = players[playerGoing].cards //define the 'cards' object for this player to make things less messy
  var cardObjectList = Object.keys(object) //array of key strings, e.g. ["card1"]
  for (i = 0; i < cardObjectList.length; i++) {

    var cardObject = object[Object.keys(object)[i]] //defines which property of the 'cards' object we're looping through. This in itself is a card object

    if (cardObject.colour == discardPile.colour ||  cardObject.number == discardPile.number) {

      console.log(players[playerGoing].name + " has matched with " + getCardString(cardObject))

      discardPile = Object.assign({}, cardObject) //Copy matched card onto discardPile

      delete object[Object.keys(object)[i]] //Delete matched card from player's hand

      if (Object.keys(object).length === 0) {
        return true
      } else {return false} //Check  if the player has run out of cards

      }
    }

    //If we don't match a card, add new card object as a property to the 'cards' object
    number = cardObjectList.length + 1
    console.log(number)
    newNumber = 'card' + number.toString()
    console.log(newNumber)

    object[newNumber] = getNextCard()
    //object[newNumber] = Object.assign({}, getNextCard())
    console.log(players[playerGoing])

    console.log('No cards matched, new card added to the hand')


  return false

}




deck = createDeck()
shuffleDeck(deck)
listOfNames = ['Ed', 'Eddie', 'Chan']
//player = [getNextCard(), getNextCard()]
//console.log(getCardString(player[0]))
createPlayers(listOfNames)
discardPile = deck[deck.length - 1]
//console.log(getPlayerAndCard(players[0]))
//console.log(getCardString(players[0][0]))
playGame()

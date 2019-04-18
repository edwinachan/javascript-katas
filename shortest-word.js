/* Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

var s = "ProofOfWork 21inc Monero Dash DarkCoin Ethereum MadeSafeCoin MadeSafeCoin Dogecoin LiteCoin Dogecoin ProofOfWork BTC MadeSafeCoin Mine Mine Dash"

function findShort(s){
  var sSplit = s.split(' ')

  var lengthOf = []

  for (i = 0; i < sSplit.length; i++) {
      lengthOf.push(sSplit[i].length)
  }
  	lengthOf.sort(function(a, b){return a-b})
	return lengthOf[0]
}

findShort(s)

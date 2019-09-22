var cards;
cards = ["queen", "queen", "king", "king"];
var cardsInPlay;
cardsInPlay = [];

var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

var flipCard
flipCard = function(cardId){
console.log("User flipped " + cards[cardId]);
cardsInPlay.push (cards[0]);
if (cardsInPlay.length === 2) {checkForMatch();
}
}

cardsInPlay.length;
if (cardsInPlay.length===2);
if (cardsInPlay.length === 2){};
if (cardsInPlay[0] === cardsInPlay[1]) { alert("you found a match!");
} else {alert("sorry, try again");}

flipCard(0);
flipCard(2);

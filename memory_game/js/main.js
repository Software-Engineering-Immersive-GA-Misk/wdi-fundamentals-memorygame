
var cards = [ 
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay;
cardsInPlay = [];

var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

var flipCard;
function flipCard(){
var cardId = this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards.rank);
console.log("User flipped "+ cards[cardId].suit);
console.log("User flipped " + cards[cardId].cardImage);
this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2) {checkForMatch();
}
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} 
else {
  alert("Sorry, try again.");
}
}

var createBoard;
function createBoard() 
{
   for (var i = 0; i < cards.length; i++) {
   	var cardElement= document.createElement('img');
   	cardElement.setAttribute('src', "images/back.png");
   	cardElement.setAttribute('data-id', i);
   	cardElement.addEventListener('click', flipCard);
   	document.getElementById('game-board').appendChild(cardElement);
   }
}



createBoard();

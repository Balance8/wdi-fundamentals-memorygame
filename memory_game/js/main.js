
var cards = [
  {
    "rank" :  "queen",
    "suit" : "hearts",
    "cardImage" : "images/queen-of-hearts.png"
  },
  {
    "rank" :  "queen",
    "suit" : "diamonds",
    "cardImage" : "images/queen-of-diamonds.png"
  },
  {
    "rank" :  "king",
    "suit" : "hearts",
    "cardImage" : "images/king-of-hearts.png"
  },
  {
    "rank" :  "king",
    "suit" : "diamonds",
    "cardImage" : "images/king-of-diamonds.png"
  }
];


var cardsInPlay = [];


var checkForMatch = function() {
 
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }

}


var flipCard = function() {

  var cardId = this.getAttribute('data-id');

  console.log("user flipped " + cards[cardId].rank);

  // a = ['a', 'b', 'c'] 
  // a[0]
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage )

  if (cardsInPlay.length === 2) {
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
  }
}

var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
    var newImg = document.createElement('img');
    newImg.setAttribute('src', 'images/back.png');
    newImg.setAttribute('data-id', i);

    newImg.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(newImg);
  }
}

var resetBoard = function (){
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    // images = [<img />, <img />, ...]
    var image = images[i]
    image.setAttribute('src', 'images/back.png');
  }
}
var setButton = function(){
	var resetButton = document.getElementById("reset");
  	resetButton.addEventListener("click", resetBoard);

}

createBoard();
setButton();
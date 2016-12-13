var theDeck=[];
var shuffDeck=[];
var suits = ['♥','♠','♣','♦'];
var faces = ["A",'2','Q','3','4','J','5','6','7','8','K','9','10'];

  function randomCard(){
  	return Math.floor(Math.random()*theDeck.length);
  };
function createDeck(){
	for (i = 0; i < faces.length; i++) {
    	theDeck.push([faces[i],suits[0]]);
    	theDeck.push([faces[i],suits[1]]);
    	theDeck.push([faces[i],suits[2]]);
    	theDeck.push([faces[i],suits[3]]);
	}
};
createDeck();
// function to suffles the deck order. changes original array.
function shuffleDeck(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

function randomDeckDeal(){
 	var a = randomCard();
 	var face = theDeck[a][0]; 	
    var suit = theDeck[a][1];
};

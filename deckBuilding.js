var theDeck=[];
var suits = ['♥','♠','♣','♦'];
var faces = ["A",'2','Q','3','4','J','5','6','7','8','K','9','10'];
function randomFace(){
	return Math.floor(Math.random()*faces.length)
};
function randomSuit(){
	return Math.floor(Math.random()*suits.length)
};
function randomPair(){
    var no1= randomFace();
    var no2= randomSuit();
    var mySuit = suits[no2];
    var myFace = faces[no1];
  };
  function randomCard(){
  	return Math.floor(Math.random()*theDeck.length);
  };
 function randomDeckDeal(){
 	var a = randomCard();
 	var face = theDeck[a][0];
    var suit = theDeck[a][1];
 }

function createDeck(){
	for (i = 0; i < faces.length; i++) {
    	theDeck.push([faces[i],suits[0]]);
    	theDeck.push([faces[i],suits[1]]);
    	theDeck.push([faces[i],suits[2]]);
    	theDeck.push([faces[i],suits[3]]);
	}
};
var shuffDeck=[];


     

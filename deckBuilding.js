var suits = ['♥','♠','♣','♦'];
var faces = ["A",'2','Q','3','4','J','5','6','7','8','K','9','10'];
var theDeck=[];
$(document).ready(function(){
var c = 0;
createDeck();
	$('#deal').click(function(x){
		x.preventDefault();
		dealFromTop();
	});
	$('#shuff').click(function(x){
		x.preventDefault();
		c=0;
		shuffleDeck(theDeck);
		$('#playmat').empty();
	});
	$('#random').click(function(x){
		x.preventDefault();
		c=0;
		$('#playmat').empty();
		randomDeckDeal();
	});
// });
// random index from theDeck
  function randomCard(){
  	return Math.floor(Math.random()*theDeck.length);
  };
// populate theDeck array
function createDeck(){
	for (i = 0; i < faces.length; i++) {
    	theDeck.push([faces[i],suits[0]]);
    	theDeck.push([faces[i],suits[1]]);
    	theDeck.push([faces[i],suits[2]]);
    	theDeck.push([faces[i],suits[3]]);
	}
};

// function to suffle theDeck array order. changes original array.
function shuffleDeck(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
// pick a random card and put it back
function randomDeckDeal(){
 	var a = randomCard();
 	var face = theDeck[a][0]; 	
    var suit = theDeck[a][1];
    printCards(face,suit);
};
// deal from top card down
function dealFromTop(){	
	if (c===52||c>52) {
		// stop deck is empty!
		alert('thats all 52, time to shuffle the deck again');
		$('#playmat').empty();
		c=0;
	}else{
		var face = theDeck[c][0];
		var suit = theDeck[c][1];
		printCards(face,suit);
		c++
	};
};
// display card drawn
function printCards(face,suit){
	var RedCard ='<div class="cardBox">'+
             '<p><span style="color:red">'+face+'</span></p>'+
             '<P><span style="color:red">'+suit+'</span></P>'+
             '</div>';
	var BlackCard ='<div class="cardBox">'+
               '<p><span style="color:black">'+face+'</span></p>'+
               '<P><span style="color:black">'+suit+'</span></P>'+
               '</div>';
    if (suit==='♦'||suit==='♥') {
		$('#playmat').append(RedCard);
	}else{
		$('#playmat').append(BlackCard);
	};
};

});
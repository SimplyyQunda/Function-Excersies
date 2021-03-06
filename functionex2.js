// ---------------------
// Define a function max() that takes two numbers as arguments and 
// returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
	if (x > y) {
		return x;
	} else {
		return y;
	}
};
		

// ---------------------
// Define a function maxOfThree() that takes three numbers as 
//arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z) {
	if (x >= y && x >= z) {
		return x;
	} else if (y >= x && y >= z){
		return y;
	} else {
		return z;
	}
};	

// ---------------------
// Write a function that takes a character (i.e. a string of 
//length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
	var newChar  = char.toLowerCase();
	if(newChar === "a"){
		return true;
	} else if (newChar === "e") {
		return true;
	} else if (newChar === "i") {
		return true;
	} else if (newChar === "o") {
		return true;
	} else if (newChar === "u") {
		return true;
	}else {
		return false;
	}
};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". 
// That is, double every consonant and place an occurrence of "o" in between. For example, 
// translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
function translate (phrase) {
	var newPhrase  = "";
for(var count = 0; count < phrase.length; count++) {
	var symbol = phrase[count];
	if(clearVowel(symbol) | symbol === " "){
		newPhrase += symbol;
	} else {
		newPhrase += symbol + "o" + symbol;
	}
}

return newPhrase;

}





// ---------------------
// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
	var letters = [];
	for (var count = 0; count > phrase.length; count++) {
		var letter = phrase[count];
		letters.shift(letter);
	}
	return letters.join("")
}
    



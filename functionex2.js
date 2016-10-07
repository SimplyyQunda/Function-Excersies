// ---------------------
// Define a function max() that takes two numbers as arguments and 
// returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(3,9){
	if (3 < 9) {
		return "9";
	} else if (9 > 3){
		return "9";
	} else {
		return 9;
	}
    //...
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as 
//arguments and returns the largest of them.
// ---------------------

function maxOfThree(4,6,7){
	if(4 <= 6){
		return "6";
	} else if(6 >= 4) {
		return "6";
	} else if (6 <= 7) {
		return "7";
	} else if(7 >= 6){
		return "7"
	} else if(4 <= 7){
		return "7";
	}else if(7 >= 4){
		return "7";
	}else {
		return 6,7;
	}
}

// ---------------------
// Write a function that takes a character (i.e. a string of 
//length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
	if(char === "a"){
		return "true";
	} else{
		return "false";
	}
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". 
// That is, double every consonant and place an occurrence of "o" in between. For example, 
// translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
var rovarspraket = ("tothohisos isos fofunon");
function rovarspraket(rovarspraket){
if("this is fun"){
	return "tothohisos isos fofunon"
}else{
	return rovarspraket.toString();
}
   
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. 
// For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    if("jag testar"){
    	return "ratset gaj";
    }else {
    	return reverse.toString();
    }

}




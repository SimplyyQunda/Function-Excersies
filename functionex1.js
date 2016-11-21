///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

var sum = function(x, y) {
	var result =  x + y;
	return result;
}



// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

var avg = function(x,y,z) {
	var value= x+y+z
	var valuetwo = value/3
	return valuetwo;
}


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

// var getLength = function(x){


function getLength (string) {
var count = 0

while (string[count] !== undefined) {
	count ++
}
return count
};
// console.log(getLength("DaQunda"))






// I believe this right, but im not sure. I know that length
// adds togetheir whats inside a string.


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.


var greaterThan = function(x,y) {
	if (x < y ) {
		return "true";
	} else {
		return "false";
	}
};

		

// }else {
	// 	return "false";
	// }


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

// var name =  "Qunda"

// var greet = function(Qunda){
// 	return "Hello" + name
// }

function greet (name) {
return 'Hello, ' + name
};



// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madlib = function(a,e,i,o) {

		return "The " + a + e + i + "loves " + o ;
	}
	





///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
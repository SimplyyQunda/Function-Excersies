// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function findMax(largest){
  var largest = (101)
  for (var count=0;count<=largest; count++){
	var numbers = array[count];
	numbers.largest(number);
  }
  return largest;
}

////////////////////////////////////////////

function findMax (numbers) {
  var largest = 0;

  for (var count = 0; count < numbers.length; count++) {
  	var number = numbers[count];
  	if (number > largest) {
  		largest = number;
  	}
  }

  return largest;
}

// findMax([1,2,3,7,4,5])
// findMax(numbers)

// ---------------------------
// 2. Find longest string
// ---------------------------
var strings = ['this','is','a','collection','of','words'];


function stringlongest (longest) {
	var longest = 0;
	
	for(var count=0; count < longest.length; count++) {
		var words = string[count];
		if (words[count]> longest.length) {
			longest = strings;
		}
	}
		return longest.string;
	}
		
	
		
		




// ---------------------------
// 3. Find even numbers
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
function evennumbers(numbers){
var even = []
for(var count=0; count < numbers.length; count++){
if(numbers[count] % 2 === 0){
even.push (numbers[count])
}
}
return even;
}






// ---------------------------
// 4. Find odd numbers
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function oddnumbers(numbers){
var odd = []
for(var count=0; count < numbers.length; count++){
if(numbers[count] % 2 === 1){
odd.push (numbers[count])
}
}
return odd;
}


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var strings = ['this','is','a','collection','of','words'];

function 








// ---------------------------
// 6. Join Both Arrays Together
// ---------------------------
//note to self, you could name it anything, you don't have to name it
//concat


var concat = function (items1, item2) {
var result =[];
 for(var count = 0; count < items1.length; count++){
  result.push(items1[count]);
 }
 
 for(var count = 0; count < items2.length; count++){
  result.push(items1[count]);
}

return result
};



// ---------------------------
// 7. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

// Instructors is a array of objects(which is what are inside of their bracket)
//

var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},

  /////////////////notes/////////////////////

//. means property accessor
// if it was { firstname : 'Jake', teaches : ['JavaScript' , 'ruby']},
// you can instructor[2].teaches[0]

console.log(instructors[2].firstname)

// or to give is a variable in simple from 

var instructors = instructors[x];


//is here to count through the array of objects, and -1 is there because its a array of objects
//so start counting from 0.

instructors[instructors.length-1].teaches

















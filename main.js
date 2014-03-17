//http://winter2014.refactoru.com/exercises/problem-set/function-practice2

//4) Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'
//4a) negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'

var negativeIndex = function (Arr, number) {
	console.log("EXPECT following console.log to be 'd' or 'sally'- ");
	console.log(Arr[Arr.length+number]);
	return Arr[Arr.length+number]; 
};
negativeIndex(['a', 'b', 'c', 'd', 'e'], -2)
negativeIndex(['jerry', 'sarah', 'sally'], -1);

	//console.log(Arr.toString()); //logs a,b,c,d,e
	//console.log(Array.length); //logs 1
	//console.log(Array()); //logs []
	//console.log(Array.isArray(Arr)); //logs true
	//console.log(arguments); //logs [Array[5], -2]
 	//console.log(arguments[0]); //logs ["a", "b", "c", "d", "e"]
 	//console.log(arguments[1]); //logs -2
	// console.log("EXPECT: d - ")

//4b) negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

// var negativeIndex = function (Arr, number) {
// 	console.log("EXPECT following console.log to be sally - ");
// 	console.log(Arr[Arr.length+number]);
// 	return Arr[Arr.length+number];
// };
// negativeIndex(['jerry', 'sarah', 'sally'], -1);
/*
	Prints numbers from 1 to 100 unless:
	 -number is divisible by 3, print Fizz
	 -number is divisible by 5, print Buzz
	 -number is divisible by both 3 and 5, print FizzBuzz
*/
function fizzBuzz() {
	for(var i = 1; i <= 100; i++) {
	  var output = "";
	  if(i%3==0) output += "Fizz";
	  if(i%5==0) output += "Buzz";
	  console.log(output || i);
	}
}
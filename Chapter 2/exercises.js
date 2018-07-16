/*
	This is the book's solution. 

	Like I'm sure many others did, I initially did a for loop with a standard counter,
	then modified the output variable inside the loop itself before printing each iteration.

	Since the function is so simple I'll just show the book's solution here,
	where the varaible is created and concatenated within the for statement.
*/
function printTriangle(num) {
	for(var line = "#"; line.length <= num; line += "#")
		console.log(line);
}


/*
	I'm proud to say my solution was very close to what the book did, with the exception of one line.
*/
function fizzbuzz() {
	for(var i = 1; i <= 100; i++) {
	  var output = "";
	  if(i%3==0) output += "Fizz";
	  if(i%5==0) output += "Buzz";

	  /*
		What I did is commented out below, book's solution much more elegant
	  */
	  // if(!output) console.log(i);
	  // else console.log(output);
	  console.log(output || i);
	}
}

/* 
	My solution using only one loop and a lot more conditional statements
*/
function chessBoard(num) {
  var black = true;
  var output = "";
  for(var i = 1; i <= num*num; i++) {
    if(black) {
      output += "#";
    }
    else {
      output += " "; 
    }
    
    black = !black;
     
    if(i%num==0) {
       output += "\n";
       black = !black;
    }   
  }
  console.log(output);
}

/* 
	Book's solution albeit modified slightly so that it actually matches the example output
 	Uses nested loops, one for rows and one for columns
 	Alternates between "#" and " " by adding current row and column and seeing if result is div by 2
*/
function chessBoard2(size) {
	var board = "";

	for(var y = 0; y < num; y++) {
		for(var x = 0; x < num; x++) {
			if((x + y) % 2 == 0) {
				board += "#";
			}
			else {
				board += " ";
			}
		}
		board +="\n";
	}

	console.log(board);
}
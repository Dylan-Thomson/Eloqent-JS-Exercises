/*
	Print a triangle line by line.

	First line has a length of 1.

	Each following line length increases by 1 until length is equal
	to the number provided.
*/
function printTriangle(num) {
	for(var line = "#"; line.length <= num; line += "#")
		console.log(line);
}

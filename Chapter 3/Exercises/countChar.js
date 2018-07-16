/*
	Return total number of instances of a specific given character in a given string
*/
function countChar(str, ch) {
	var total = 0;
	for(var i = 0; i < str.length; i++) {
		if(str.charAt(i) === ch) {
			total++;
		}
	}
	return total;
}

function countBs(str) {
	return countChar(str, "B");
}
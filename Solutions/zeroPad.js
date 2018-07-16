/*
	Given a number and width, returns number as a string 
	padded with zeros if it is less than the width.
*/
function zeroPad(num, width) {
	var str = String(num);
	while(str.length < width)
		str = "0" + str;
	return str;
}
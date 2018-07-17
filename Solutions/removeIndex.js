/*
	Remove an element of an array at the given index and return new array
*/
function removeIndex(arr, i) {
	return arr.slice(0, i).concat(arr.slice(i+1));
}
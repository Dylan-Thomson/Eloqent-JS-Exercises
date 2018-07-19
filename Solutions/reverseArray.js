function reverseArray(arr) {
	var result = [];
	while(arr.length > 0) {
		result.push(arr.pop());
	}
	return result;
}


/*
	Loop from start to middle of array (rounded to lower number)
	Switch current element with element at (arr.length - 1 - i)
	(arr.length - 1 - i) is where i would be if we were going backwards
*/
function reverseArrayInPlace(arr) {
	for(var i = 0; i < Math.floor(arr.length / 2); i++) {
		var old = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = old;
	}
	return arr;
}
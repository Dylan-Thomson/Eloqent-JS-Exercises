function reverseArrayInPlace(arr) {
	for(var i = 0; i < Math.floor(arr.length / 2); i++) {
		var old = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = old;
	}
	return arr;
}

function reverseArray(arr) {
	var result = [];
	while(arr.length > 0) {
		result.push(arr.pop());
	}
	return result;
}
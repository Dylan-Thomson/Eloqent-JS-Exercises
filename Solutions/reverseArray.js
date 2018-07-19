function reverseArray(arr) {
	var result = [];
	while(arr.length > 0) {
		result.push(arr.pop());
	}
	return result;
}
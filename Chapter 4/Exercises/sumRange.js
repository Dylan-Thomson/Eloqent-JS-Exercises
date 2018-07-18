function range(start, end, step) {
	if(arguments.length < 3) {
		step = 1;
	}
	var arr = [];
	for(var i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}

function sum(arr) {
	var sum = arr[0];
	for(var i = 1; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}


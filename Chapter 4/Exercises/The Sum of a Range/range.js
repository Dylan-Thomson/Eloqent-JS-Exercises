function range(start, end, step) {
	if(arguments.length < 3) {
		step = 1;
	}
	var arr = [];
	if(step < 0) {
		for(var i = start; i >= end; i+=step) {
			arr.push(i);
		}
	}
	else {
		for(var i = start; i <= end; i+=step) {
			arr.push(i);
		}
	}
	return arr;
}

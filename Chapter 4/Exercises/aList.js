function prepend(value, list) {
	return {value: value, rest: list};
}

function arrayToList(arr) {
	var list = null;
	for(var i = arr.length - 1; i >= 0; i--) {
		list = prepend(arr[i], list);
	}
	return list;
}

function listToArray(list) {
	var result = [];
	while(list) {
		result.push(list.value);
		list = list.rest;
	}
	return result;
}

function nth(list, n) {
	if(!list) {
		return undefined;
	}
	if(n == 0) {
		return list.value;
	}
	return nth(list.rest, n - 1);
}
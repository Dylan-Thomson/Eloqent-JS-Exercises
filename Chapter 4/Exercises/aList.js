function prepend(el, list) {
	return {value: el, rest: list};
}

function arrayToList(arr) {
	var list = null;
	for(var i = arr.length - 1; i >= 0; i--) {
		list = prepend(arr[i], list);
	}
	return list;
}
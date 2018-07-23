function flatten(array) {
	return array.reduce((flattened, current) => flattened.concat(current), []);
}
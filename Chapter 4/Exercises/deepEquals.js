function deepEquals(a, b) {
	if(a === b) return true;

	// If a and b aren't equal, and aren't objects or null, return false
	if(typeof a != "object" || typeof a === null ||
		typeof b != "object" || typeof b === null) return false;

	let keysA = Object.keys(a), keysB = Object.keys(b);

	// If a and b dont have same number of keys they aren't equal
	if(keysA.length != keysB.length) return false;

	// If b doesn't contain key from a return false
	// Otherwise invoke deepEquals on the keys and return false if that is false
	for(let key of keysA) {
		if(!keysB.includes(key) || !deepEquals(a[key], b[key])) return false;
	}

	// If we've made it this far, we haven't found an inequality, return true.
	return true;
}

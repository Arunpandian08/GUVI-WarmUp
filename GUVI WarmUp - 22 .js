/* Given an object and a key, "addProperty" adds a new property on the given object with a value of true. */

var obj = {
	obj: "mykey"
}

function addProperty(obj, key) {
	///Your code Starts here 
	return obj[key] = true;
	///Your code Ends here
}
addProperty(obj, "mykey");
/*
Lines For TestCase
obj.mykey
*/
/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(value) {
	///Your code Starts here 
	//if the value is lessthan || equalto || greaterthan return opp.value 
	if (value <= 0 || parseInt(value > 0)) {
		return -value;
	} //else if value is decimal return -1
	else if (value % 1 !== 0 || value == "value") {
		return -1;
	} else {
		return -value;
	}
	///Your code Ends here
}
/*
Lines For TestCase
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/
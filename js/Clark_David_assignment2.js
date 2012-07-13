/* David Clark
   07/12/12
   Assignment 2
   Continuation of story from Assignment 1
*/

var officerName = "Captain Morris",
	platoonCount = 1,
	platoonSquads = [
		"Squad 1",
		"Squad 2",
		"Squad 3",
		"Squad 4"
	]
;

//Procedure

var checkSquads = function (s) {
	if (s === 4) {
	console.log("We are ready sir!");
	} else {
	console.log("We are not ready sir!");
	}
};

checkSquads(4);

//Boolean Function

var itsTrue = true;
var itsFalse = false;
var getBoolean = function (platoon, officer) {
	if (platoon && officer) {
	return itsTrue;
	} else {
	return itsFalse;
	}
};

var jesusChrist = getBoolean(true, true);
console.log(jesusChrist);
var companyCheck = getBoolean(true, true);
console.log(companyCheck);

//Number Function

var	getRifles = function (rifles) {
	var soldiers = 30; 
	while (soldiers > 0) {
	soldiers--;
	return soldiers;
  }
};

var totalRiflesLeft = getRifles(30);
console.log(totalRiflesLeft);

//String Function

var getString = function (x, y) {
	return (x + " so " + y);
	
};

var rifles = getString("We don't have enough rifles", "we need more rifles");
console.log(rifles);

//Array Function

var getArray = function () {
	var squadCount = platoonSquads.length;
	platoonSquads.push ("Squad 5");
	for (var i = 0; i < platoonSquads.length; i++) {
	return platoonSquads	
	}
};

var showSquads = getArray(1, platoonSquads);
console.log(showSquads)

console.log(jesusChrist, totalRiflesLeft, rifles, showSquads)console.log(companyCheck, totalRiflesLeft, rifles, showSquads)
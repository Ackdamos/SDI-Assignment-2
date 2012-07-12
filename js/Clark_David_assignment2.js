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

//Number Function

var	getNumber = function (i) {
	while (i < 5) {
	i++;
	var shit = i;
	return shit;
  }
};

var shit = getNumber(0);
console.log(shit);

/*String Function

var getString = function () {

};

getString();

//Array Function

var getArray = function () {
	for () {}
};

getArray();
*/
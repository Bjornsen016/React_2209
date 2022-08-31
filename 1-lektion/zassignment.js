const data = require("./data.json");

/**
 1. create an object of entries about personal information
 * it should necessarily contain the following entries along with the others:
 * - a date datatype
 * - an array
 * - another object within it (nested object)
 * - a function
 */

const info = {
	// your entries here
	name: "Erik Andersson",
	birthDay: new Date(`2000-11-11`),
	toys: ["car", "bike", "boat"],
	partner: { name: "Erika Andersson" },
	age: function age() {
		Math.round((new Date() - this.birthDay) / 1000 / 60 / 60 / 24 / 365);
	}S,
};

console.log(info);
console.log(info.age());

/**
 * 2. from the array inside the object "info", add it to a new array using destructuring ellipses.
 * the new array should contain:
 * ["element-one", rest of the contents of the old array, "element-two"]
 */

const newArray = ["element-one", ...info.toys, "elemtent-two"];

console.log(newArray);

/**
 * 3. create a json file containing an object with at least one entry.
 * Add the object from the file into a new field called "new" inside the object "info"
 */

info.new = { data };

console.log(info);

/**
 * 4. create an arrow function which creates and returns the list of keys from an input object
 */

const getKeys = (obj) => Object.keys(obj);
console.log(getKeys(info));

/**
 * 5. convert the date entry from the object "info" into an ISO string and parse it
 */
const myDateString = Date.parse(info.birthDay.toISOString());
console.log(myDateString);

/**
 * 6. take the array from the object "info" and use the "map" function to return a
 * new array with each item being converted into a string
 */
const myNewArray = info.toys.map((toy) => toy.toString());

console.log(myNewArray);

/**
 * 7. try to understand and experiement with the following functions (can ask me for any help always):
 * - map function (array)
 * - reduce function (array)
 * - filter function (array)
 */

const arrRed = info.toys.reduce((theToys, toy) => (theToys += `, ${toy}`));

console.log(arrRed);

const arrFilter = info.toys.filter((toy) => toy === "car");

console.log(arrFilter);

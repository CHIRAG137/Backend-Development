const { Console } = require("console");

const obj = {
 name: "Chirag",
 age: 20,
 college: "IIITR",
};

// Coverting object to JSON
const objToJson = JSON.stringify(obj);
console.log(objToJson);

// Converting JSON to object
const jsonToObj = JSON.parse(objToJson);
console.log(jsonToObj);
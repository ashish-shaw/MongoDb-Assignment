const myName = require("./myname.js");

function School() {
  console.log(myName);
  console.log("My School Name is Shree Jain Vidyalaya");
}

function college() {
  console.log("I did my graduation from Calcutta University");
  console.log("I am currntly studying in Masai School");
}

module.exports = { School, college };

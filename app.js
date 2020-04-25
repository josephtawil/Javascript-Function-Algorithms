//require looks for the local file that you enter so that you are able to use the function
var sayHello = require("./sayHello");

var message = sayHello("Joseph");

console.log(message);

//the variable sumArray is set to the module that we are requiring
//require looks in the sumArray file for all the modules and sets the sumArray variable to the module
var sumArray = require("./sumArray");
//theSum  is the variable set to the result of the sumArray function
var theSum = sumArray([1, 2, 3]);
//we are printing theSum out onto the console
console.log(theSum);



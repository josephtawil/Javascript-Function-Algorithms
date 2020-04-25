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

var largestNum = require("./largestNum");
var largest = largestNum([12, 18, 100, 76, 55]);
console.log(largest);

var smallestNum = require("./smallestNum");
var smallest = smallestNum([100, 55, 4, 99]);
console.log(smallest);

var greaterThan = require("./greaterThan");
//greaterThan takes in an array and the index of the array that you want to return the array after the index
var greater = greaterThan([1, 2, 3, 4, 7, 6], 3);
console.log(greater);

//array of names
var names = ["Joseph", "Tawil", "Farid"];

var swapNames = require("./swapNames");
//swapping index item 1 with index item 2
//swap(arr,index, index2)
var swap = swapNames(names, 1, 2);
console.log(swap);
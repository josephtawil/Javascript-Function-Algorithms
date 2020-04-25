//sayHello is a function that takes in str object
//modules allow us to reuse our code throughout our program
//wxports allows the function to be imported and usable in other files
module.exports = function sayHello(str) {
    return (`Hello $(str)`);
}


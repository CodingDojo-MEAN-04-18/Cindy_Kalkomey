// Assignment: Math Module: Create a javascript file called 'mathlib.js'.  We're not going to make a node server for this exercise, but we'll still make a file called app.js.  Within app.js, we're going to require our mathlib module and use its functionality to do some basic computations.
// In this javascript module, you're going to return a javascript object that allows the developer to do the following tricks.
// * add two numbers (e.g. math.add(2,3) should return 5)
// * multiply two numbers (e.g. math.multiply(3,5) should return 15)
// * square a number (e.g. math.square(5) should return 25)
// * return a random number between the two numbers (e.g. math.random(1,35) should return a random number between 1 and 35)

var math = require('./mathlib')();     //notice the extra invocation parentheses!
console.log(math);
console.log( math.add(2,3) );
console.log( math.multiply(3,5) );
console.log( math.square(5) );
console.log( math.random(3,35) );



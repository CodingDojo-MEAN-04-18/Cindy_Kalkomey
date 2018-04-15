// Assignment I: JavaScript Library: Finish the five methods attached to the _ object to create your own custom library.  The purpose of this assignment is to show how a simple JavaScript library can be made. 
// Consider the below example:
// //Can we make this into a method of an object?
// function each(arr, callback) {
//   // loop through the array
//   for(var i = 0; i < arr.length; i++) {
//     callback(arr[i]); // invoking the callback many times... delegation!
//   }
// }
// Your mission is to build your own version of the underscore library. Try to get as close as you can to what underscore provides for each example below.


var _ = {
   map: function(arr, callback) {
        // Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
        // _.map([1, 2, 3], function(num){ return num * 3; });
        // => [3, 6, 9]

        let newarr = [];       
        for(let i = 0; i < arr.length; i++) {
            newarr.push( callback(arr[i]) ); // mapping each value in list through a transformation function
        }; 
        return newarr; 
   },

   reduce: function(arr, callback, memo) { 
        // Reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
        // If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
        // var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
        // => 6
       
        for(let i = 0; i < arr.length; i++) {
            memo = callback(memo, arr[i], i); // iteratee is passed four arguments: the memo, then the value and index (or key)
        }; 
        return memo;
   },

   find: function(arr, callback) {   
        // Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
        // var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        //  => 2
        for(let i = 0; i < arr.length; i++) {
            if ( callback(arr[i]) ) {
                return arr[i];
            }
        }
        return;
   },

   filter: function(arr, callback) { 
        // Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
        // var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        // => [2, 4, 6]
        let newarr = [];
        for(let i = 0; i < arr.length; i++) {
            if ( callback(arr[i]) ) {
                newarr.push( arr[i] );
            }
        }
        return newarr;
   },

   reject: function(arr, callback) { 
        // Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
        // var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        // => [1, 3, 5]
        let newarr = [];
        for(let i = 0; i < arr.length; i++) {
            if ( !callback(arr[i]) ) {
                newarr.push( arr[i] );
            }
        }
        return newarr;
   }
 }
// you just created a library with 5 methods!


let maptest = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(maptest);

let sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum); //  => 6

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even); //  => 2
var three_mult = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 3 == 0; });
console.log(three_mult); //  => 3

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens);    // => [2, 4, 6]
var three_mults = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 3 == 0; });
console.log(three_mults);    // => [3, 6]

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);  // => [1, 3, 5]
var not_three_mults = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 3 == 0; });
console.log(not_three_mults);    // => [1, 2, 4, 5]


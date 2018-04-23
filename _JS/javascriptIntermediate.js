// Assignment: JavaScript Intermediate
// Complete the following challenges. All of your code should be in one HTML file that is well commented to indicate what each block of code is doing and which problem you are solving. Don't forget to test your code as you go!

// Part I: Create a function called starString() that takes a number and returns a string of that many *. For example:
// let stars = starString(8)
// If we console.log(stars) we should see ******** printed in our terminal.
function starString(n, str='*'){
    // The string repeat() method constructs and returns the concatenation of the specified number of copies of the string.
    return str.repeat(n);
}
console.log('****** starString() ******');
console.log('starString(0):', starString(0));
console.log('starString(2):', starString(2));
console.log('starString(5):', starString(5));


// Part II: Create a function called drawStars() that takes an array of numbers and prints out *.
// let x = [4, 6, 1, 3, 5, 7, 25]
// drawStars(x) should print the following in when invoked:
// ****
// ******
// *
// ***
// *****
// *******
// *************************
function drawStars(arr){
    // loop thru arr and call starString()nwith each element in the array
    for (let i = 0; i < arr.length; i++){
        console.log(starString(arr[i]));
    }
    // The string repeat() method constructs and returns the concatenation of the specified number of copies of the string.
    return;
}
console.log('****** drawStars() ******');
let x = [4, 6, 1, 3, 5, 7, 25]
console.log('drawStars of', x,':');
drawStars(x);

// Part III: Modify the function above. Allow an array containing integers and strings to be passed to the drawStars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .toLowerCase() string method for this part.
// For example:
// let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
// drawStars(x) should print the following in the terminal:
// ****
// ttt
// *
// mmmmmmm
// *****
// *******
// jjjjjjjjjjj

function drawStars2(arr){
    // loop thru arr and call starString()nwith each element in the array
    for (let i = 0; i < arr.length; i++){
        // if array element is a string, repeat first char of string for length of string
        if(typeof arr[i] == 'string') {
            str = arr[i].substr(0,1);
            str = str.toLowerCase();
            n = arr[i].length;
            console.log(starString(n, str));
        }else {
            console.log(starString( arr[i] ) );
        }
    }
    // The string repeat() method constructs and returns the concatenation of the specified number of copies of the string.
    return;
}
console.log('****** drawStars2() ******');
let arr2 = [4, 'Tom', 1, 'Michael', 5, 7, 'Jimmy Smith'];
console.log(arr2);
drawStars2(arr2);

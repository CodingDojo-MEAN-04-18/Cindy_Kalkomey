// Test 1: In order to make this test pass, we will need to add logic to magic_multiply. Whenever we call magic_multiply for 5 and 2, the returned result should always be 10. Remember, we must use these specific inputs!
// let test1 = magic_multiply(5, 2);
// console.log(test1);
// // => 10

// Test 2: 
// let test2 = magic_multiply(0, 0);
// console.log(test2);
// // => "All inputs 0"

// Test 3: 
// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);
// // => [2, 4, 6]
// Hint: You will need to handle your output differently depending on if x is an array or an integer.

// Test 4: 
// let test4 = magic_multiply(7, "three");
// console.log(test4);
// // => "Error: Can not multiply by string"

// Test 5 - Bonus: 
// let test5 = magic_multiply("Brendo", 4);
// console.log(test5);
// // => "BrendoBrendoBrendoBrendo"

// How could we check if an array is an array? 

function magic_multiply(x, y){
    if(typeof y === 'string') {
        return "Error: Can not multiply by string"
    }
    if(typeof x === 'string') {
        let tmp = x;
        for (let i = 1; i < y; i++) {
            x = x + tmp;
        }
        return x;
    }
    if(Array.isArray(x)){
        for (let i = 0; i < x.length; i++) {
            x[i] = x[i] * y;
        }
    }else{
        x = x * y;
    }
return x;
}
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"

let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"

//How could we check if an array is an array? 
let arr = "sting test";
console.log(Array.isArray(arr));
arr = [1,2,3];
console.log(Array.isArray(arr));


// Assignment: JavaScript Math
// Complete the below challenges using JavaScript's Math object.
// Math 1: Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.
function zero_negativity(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            return false;
        }
    }
    return true;
}
console.log('****** Math 1 ******');
console.log(zero_negativity([1,2,3]));
console.log(zero_negativity([1,2,-3]));
// Math 2" Write a function called is_even(). This function should take a number. Return true if the input number is even, return false if the number is odd.
function is_even(num){
    if(num % 2 == 0){
        return true;
    }
    return false;
}
console.log('****** Math 2 ******');
console.log(is_even(1));
console.log(is_even(16));
console.log(is_even(0));

// Math 3: Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.
function how_many_even(arr){
    let cnt = 0;
    for(let i = 0; i < arr.length; i++){
        if(is_even(arr[i])){
            cnt++;
        }
    }
    return cnt;
}
console.log('****** Math 3 ******');
console.log(how_many_even([2,3,7,9,11]));
console.log(how_many_even([2,3,8,12,16]));
console.log(how_many_even([1]));

// Math 4: Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
function create_dummy_array(n){
    let arr=[];
    for(let i = 0; i < n; i++){
        arr.push(Math.random()*9);
    }
    return arr;
}
console.log('****** Math 4 ******');
console.log(create_dummy_array(1));
console.log(create_dummy_array(5));

// Math 5: Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.
function random_choice(arr){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
console.log('****** Math 5 ******');
console.log(random_choice([2,3,7,9,11]));
console.log(random_choice([2,3,8,12,16]));
console.log(random_choice([1]));
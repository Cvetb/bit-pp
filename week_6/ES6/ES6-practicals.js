'use strict';
/* task 1. Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ‘hello’, ‘there’, ‘ES’, 6
    Output: ‘Hello’, ‘there’, ‘ES’*/
function capitalize(arr) {

    let word = '';
    arr.forEach(function (item, index) {
        if (typeof item == 'string') {
            let a = item[0].toUpperCase();
            let b = item.substring(1);
            word += a + b + ' ';
        }
    });
    return word;
}

console.log(capitalize(["hello", "there", "ES", 6]));
//---------------------------------------------------------------------
/* task 2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: 120
	Output: 24*/
function saleTax(price) {
    const tax = 0.2;
    let c = price * tax;
    return c;
}
console.log(saleTax(120));

//---------------------------------------------------------------------
/* task 3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
    Output: [6, 8, 13, -7, 4.1]*/

function inc(array, n = 1) {
    let newArr = [];

    array.forEach(function (item) {
        newArr.push(item + n);
    });

    return newArr;
}
console.log(inc([4, 6, 11, -9, 2.1]));

//----------------------------------------------------------
/* task 4. Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
    Output: [6, 0]*/
    
function filterEven(arr) {

    let newArray = arr.filter(function (n) {
        return n % 2 == 0;

    });
    return newArray;

}
console.log(filterEven([6, 11, 9, 0, 3]));

//--------------------------------------------------------------
/* task 5.Write a function that filters all the strings from the given array that contain substring JS or js.
    Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
    Output: ['babel.js, 'JS standard']*/

function filterString(arr) {
    let newArray = arr.filter(function (args) {
        return args.includes('js') + args.includes('JS');
    })
    return newArray;
}
console.log(filterString(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));

//--------------------------------------------------------------------
/* task 6. Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
    Output: [7, 8]*/

function filterInteger(arr) {
    let newArray = arr.filter(function (num) {
        return Number.isInteger(num);

    })
    return newArray;
}
console.log(filterInteger([1.6, 11.34, 9.23, 7, 3.11, 8]));

//--------------------------------------------------------------
/* task 7. Write a function that filters all integer arguments that contain digit 5.
    Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
    Output: [45, 553]*/

function filterFive(arr) {
    let newArray = arr.filter(function (b) {

    })
    return newArray;
}
console.log(filterFive([23, 11.5, 9, 'abc', 45, 28, 553]));

//--------------------------------------------------------------
/* task 8. Write a function that returns indexes of the elements greater than 10. 
    Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
    Output: 1, 2, 5*/

function filterGreater(arr) {
    let newArray = [];
    arr.forEach(function (item, index) {
        if (item > 10) {
            newArray += arr.indexOf(item);

        }

    });
    return newArray.split('') + ' ';

}
console.log(filterGreater([1.6, 11.34, 29.23, 7, 3.11, 18]));

//-------------------------------------------------------------------
/* task 9. Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
Write a function that prints out the names of persons older than 25. 
Write a function that check if there is a person older than 40.
Write a function that checks if all persons are older than 20.  */

let person1 = {name: 'Pera',age: 42};
let person2 = {name: 'Zika',age: 38};
let person3 = {name: 'Mika',age: 56};
let person4 = {name: 'Ana',age: 25};
let person5 = {name: 'Jelena',age: 19};
let person6 = {name: 'Sofija',age: 31};
let person7 = {name: 'Marko',age: 18};
let arr = [person1, person2,person3,person4, person5, person6,person7];

console.log(arr);
function print(arr) {

}
function checkOlder(arr) {

}
function older(arr) {

}
//--------------------------------------------------------------
/* task 10. Write a function that checks if the given array is an array of positive integer values. 
    Input: [3, 11, 9, 5, 6]
    Output: yes

    Input: [3, -12, 4, 11]
    Output: no */

function checkPositive(arr) {

    let b = arr.every(function (args) {
        return args > 0;
    })
    if (b == true) {
        return 'yes';
    }
    return 'no';
}
console.log(checkPositive([3, 11, 9, 5, 6]));
console.log(checkPositive([3, -12, 4, 11]));

//-------------------------------------------------------
/* task 11. Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48 */

function calculate(arr) {
    let product = arr.reduce((prev, curr) => prev * curr)
    return product;

}
console.log(calculate([2, 8, 3]));

//----------------------------------------------------------
/* task 12. Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
    Output: 8*/

function findMax(arr) {
    let max = Math.max(...arr);
    return max;

}
console.log(findMax([2, 7, 3, 8, 5.4]));
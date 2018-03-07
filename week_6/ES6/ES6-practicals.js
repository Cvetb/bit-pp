/*Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ‘hello’, ‘there’, ‘ES’, 6
    Output: ‘Hello’, ‘there’, ‘ES’*/
/*
function capitalString(...args) {

    function isItString(a) {
        if (typeof a == "string") {
            return true;
        } else {
            return false;
        }
    }

    let b = args.filter(isItString());
    b = args.map(function (item) {

        item[0].toUpperCase().split("");


    });

    return b;
}
console.log(capitalString(["hello", "there", "ES", 6]));

*/
/*Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: 120
	Output: 24*/
function saleTax(price) {
    const tax = 0.20;
    let c = price * tax;
    return c;
}
console.log(saleTax(120));

/*Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
    Output: [6, 8, 13, -7, 4.1]*/



'use strict';
function inc(array, n = 1) {
    let newArr = [];
    
    array.forEach(function (item) {
        newArr.push(item + n);
    });

    return newArr;
}
console.log(inc([4, 6, 11, -9, 2.1]));

/*Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]*/


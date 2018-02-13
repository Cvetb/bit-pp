/*Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.*/

/* Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]  */

var combine = function (a, b) {
    var i;
    var j;
    var c = [];
    var k = 0;
    for (i = 0; i < a.length; i++) {
        c[k] = a[i];
        k++;
        c[k] = b[i];
        k++;
    }
    return c;
}
console.log(combine(["a", "b", "c"], [1, 2, 3]));

/* 3Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]  */

var rotateElements = function (arr, k) {
    var rotatedArray = [];
    var i;
    var j;
    // prebacujemo od k-tog elementa
    for (i = k, j = 0; i < arr.length; i++, j++) {
        rotatedArray[j] = arr[i];
    }
    // prebacujemo do k-tog elementa
    for (i = 0; j < arr.length; j++, i++) {
        rotatedArray[j] = arr[i];
    }
    return rotatedArray;
}

console.log(rotateElements([1, 2, 3, 4, 5, 6], 2));

/*Write a function that takes a number and returns array of its digits.
*/ 
var numToDigits = function (n) {
    var arr = [];
    var str = n + '';
    for (i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }

    return arr;
}
console.log(numToDigits(123));

/*Write a program that prints a multiplication table for numbers up to 12.
 */
var multiplication = function (n) {

    for (var i = 1; i <= n; i++) {
        var line = '';
        for (var j = 1; j <= n; j++) {
            line = line + i * j + ' ';
        }
        console.log(line);
    }
}

multiplication(12);
/*Write a function to input temperature in Centigrade and convert to Fahrenheit.
 */

var convertToF = function (celsius) {
    var fahrenheit;
    fahrenheit = ((celsius * (9 / 5)) + 32);
    return fahrenheit;
}
console.log(convertToF(10));

/*Write a function to find the median element of array. */
var median = function (a) {
    var medianIndex = 0;
    if (a.length % 2 == 1) {
        medianIndex = (a.length - 1) / 2;

    }
    return a[medianIndex];
}
console.log(median([1, 2, 3, 4, 5, 6, 7]));

/*Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases, input array should be returned.
 */

var firstLast = function (a) {
    var medianIndex = 0;
    if (a.length % 2 == 1) {
        medianIndex = (a.length - 1) / 2;
        return a[0] + ' ' + a[a.length - 1] + ' ' + a[medianIndex];
    } else {
        return a[0] + ' ' + a[a.length - 1];
    }
}

console.log(firstLast([1, 2, 3, 4, 5, 6]));

/*The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40 */
var bmi = function (w, h) {
    result = w / (h * h);

    if (result < 15) {
        console.log("Starvation");
    } else if (result < 17.5 && result > 15) {
        console.log("Anorexic");
    } else if (result > 17.5 && result < 18.5) {
        console.log("Underweight");
    } else if (result > 18.5 && result < 25) {
        console.log("Ideal");
    } else if (result > 25 && result < 30) {
        console.log("Overweight");
    } else if (result > 30 && result < 40) {
        console.log("Obese");
    } else if (result > 40) {
        console.log("Morbidly");
    } 
    return result;
}
bmi(86,1.93);


/*Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********  */ 
/*Write a function to find the maximum element in array of numbers. Filter out all non-number elements.*/
/*Write a function to find the maximum and minimum elements. Function returns an array.*/ 
/*Write a function to find the element that occurs most frequently.*/
/*Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.*/
/*Write a function to find all the numbers greater than the average.*/
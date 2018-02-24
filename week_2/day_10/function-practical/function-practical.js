"use strict";
/* task.1
Write a function that calculates the maximum of two given numbers. */
function maxNumber(a, b) {
    var max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    return max;
}
console.log(maxNumber(5, 9));


/*task.2
Write a function that checks if a given number is odd.*/
function oddNum(a) {
    var odd;
    if (a % 2 != 0) {
        odd = "Number is odd.";
    } else {
        odd = "Number is even.";
    }
    return odd;

}
console.log(oddNum(15));


/*task.3
Write a function that checks if a given number is a three digit long number.*/
function threeDigitNum(a) {
    var num;
    if (a > 99 && a < 1000) {
        num = "Three digit long number.";

    } else {
        num = "Not a three digit long number.";
    }
    return num;
}

console.log(threeDigitNum(852));


/*task.4
Write a function that calculates an arithmetic mean of four numbers.*/

function arithmeticMean(a, b, c, d) {
    var arm;
    arm = (a + b + c + d) / 4;
    return arm;
}
console.log(arithmeticMean(5, 7, 9, 6));
/*
function arithmeticMean(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(arithmeticMean([5, 8, 6, 7, 9])); */


/*task.5
Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
*****
*    *
*    *
*    *
*****   */
function square(n) {
    var n = 5;
    var s = "*";

    for (var r = 0; r <= n - 1; r++) {
        if (r == 0 || r == n - 1) {
            var line = "";
            for (var i = 0; i < n; i++) {
                line += s;
            }
            line = line + "\n"
            console.log(line);
        } else {
            var line = "";
            line = line + s;
            for (i = 0; i < n - 2; i++) {
                line = line + " ";
            }
            line = line + s;
            line += "\n";
            console.log(line);
        }
    }
    }
    console.log (square([5]));



    /* task.6
    Write a function that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the function should draw:
    * * * * *
    * * *
    * * * * * * *   */
    function stars(arr) {
        var result = "";
        var sum = "";
        var s = "*";
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr[i]; j++) {
                sum += s;
            }
            sum += "\n";
        }
        return sum;
    }
    console.log(stars([5, 3, 7]));


    /*task.7
    Write a function that calculates a number of digits of a given number. */
    function numOfDigits(n) {

    }
    console.log(numOfDigits(2354));


    /*task.8
    Write a function that calculates a number of appearances of a given number in a given array. */
    function numOfAppear(a, array) {
        var i;
        var n = 0;
        for (i = 0; i < array.length; i++) {
            if (array[i] == a) {
                n++;
            }
        }
        return n;
    }
    console.log(numOfAppear(6, [2, 1, 6, 2, 5, 6, 1]));


    /* task.9
    Write a function that calculates the sum of odd elements of a given array. */
    function sumOfOdd(n) {
        var sum = 0;

        for (var i = 0; i < n.length; i++) {
            if (n[i] % 2 !== 0) {
                sum = sum + n[i];
            }
        }
        return sum;
    }
    var arr = [3, 5, 5, 6];
    console.log(sumOfOdd(arr));


    /*task.10
    Write a function that calculates the number of appearances of a letter a in a given string. Modify the function so it calculates the number of both letters a and A. */

    function countNumberOfLetter(text) {

        if (typeof text == "string") {
            var n = 0;
            for (var i = 0; i < text.length; i++) {

                if (text[i] == "a" || text[i] == "A") {
                    n++;
                }
            }
            console.log(n);
        } else {
            console.log("Input is not a string");
        }
    }

    countNumberOfLetter("HELLOa jklAAAkujjgaa");


    /*task.11
    Write a function that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the function prints out abcabcabcabc. */
    function concatenates(n) {
        var a = "abc";
        var line = "";
        for (var i = 0; i < n; i++) {
            line += a;
        }
        return line;
    }
    console.log(concatenates(3));



    //izdvojiti cifre i sabrati ih

    function sumOfDigits(n) {

        var sum = 0;
        var lastDigit;

        while (n > 0) {

            lastDigit = n % 10;

            n = (n - lastDigit) / 10;

            sum = sum + lastDigit;

        }

        return sum;

    }

    console.log(sumOfDigits(481));
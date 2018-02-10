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


/*task.3
Write a function that checks if a given number is a three digit long number.*/

/*task.4
Write a function that calculates an arithmetic mean of four numbers.*/

function arithmeticMean(a, b, c, d) {
    var arm;
    arm = (a + b + c + d) / 4;
    return arm;
}
console.log(arithmeticMean(5, 7, 9, 6));

/*task.5
Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
*****
*    *
*    *
*    *
*****   */
/* task.6
Write a function that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the function should draw:
* * * * *
* * *
* * * * * * *   */
function stars2(arr) {
    var result = "";
    var sum = "";
    var star = "*";
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i]; j++) {
            sum += star;
        }
        sum += "\n";
    }
    return sum;
}
console.log(stars2([5, 3, 7]));


/*task.7
Write a function that calculates a number of digits of a given number. */


/*task.8
Write a function that calculates a number of appearances of a given number in a given array. */ 

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

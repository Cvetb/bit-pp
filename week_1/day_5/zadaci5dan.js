var a = 3;
var b = 5;
var c = 10;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
}

/* Task 1. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
Sample inputs: 10 | 7 (check one at a time)
Output: 10 / 2 = 5 | X  */
var n = 102;

if ((typeof n) == 'number') {

    if ((n % 2) === 0) {

        var divisionResult = n / 2;
        console.log(n + " / 2 = " + divisionResult);

    } else {
        console.log("x");
    }
}

/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 
 */
var a = -5;
var b = -2;
var c = 6;
var d = 0;
var f = -1;
if (a > b && a > c && a > d && a > f) {
    console.log(a);
} else if (b > a && b > c && b > d && b > f) {
    console.log(b);
} else if (c > a && c > b && c > d && c > f) {
    console.log(c);
} else if (d > a && d > b && d > c && d > f) {
    console.log(d);
} else {
    console.log(f);
}
/* Task 3. Write a conditional statement to sort three numbers.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 
*/
var a = 0;
var b = -1;
var c = 4;

if (a > b && a > c) {
    if (b > c) {
        console.log(a + ", " + b + ", " + c);
    } else {
        console.log(a + ", " + c + ", " + b);
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(b + ", " + a + ", " + c);
    } else {
        console.log(b + ", " + c + ", " + a);
    }
} else if (c > a && c > b) {
    if (a > b) {
        console.log(c + ", " + a + ", " + b);
    } else {
        console.log(c + ", " + b + ", " + a);
    }
}

/* Task 4. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is - */
var a = 3;
var b = -7;
var c = 2;

if (a > 0 && b > 0 && c > 0) {
    console.log("The sign is +");
} else if (a < 0 && b < 0 && c < 0) {
    console.log("The sign is +");
} else if (a > 0 && b < 0 && c < 0) {
    console.log("The sign is +");
} else if (a < 0 && b > 0 && c < 0) {
    console.log("The sign is +");
} else {
    console.log("The sign is -");
}


/*Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.  */
var a = 14,
    b = 13;

if (a > b) {
    console.log("The larger of " + a + " and " + b + " is " + a + ".");
} else if (b > a) {
    console.log("The larger of " + a + " and " + b + " is " + b + ".");
} else {
    console.log("The values " + a + " and " + b + " are equal.");
}
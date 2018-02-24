/* task.1
Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.*/
for (i = 0; i < 16; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even number");
    } else {
        console.log(i + " is odd number");
    }
}
/* task.2
Write a program to sum the multiples of 3 and 5 under 1000.*/

var sum = 0;
for (i = 1; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum = sum + i;
    }
}
console.log(sum);
/* task.3
Write a program to compute the sum and product of an array of integers.*/
var myArray = [3, 5, 7];
var sum = 0;
var product = 1;
/*other way
for(i=0; i < myArray.length; i++){
    sum += myArray[i];
    product *= myArray[i];
}
console.log(sum);
console.log(product);
*/
for (i in myArray) {
    sum += myArray[i];
    product *= myArray[i];
}
console.log(sum);
console.log(product);
/*task.4
Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];*/

var result = "";
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

for (var i in x) {

    result += x[i];
}
console.log(result);
//------------------------
/* task.5
Write a program that prints the elements of the following array.

var a = [
[1, 2, 1, 24], 
[8, 11, 9, 4], 
[7, 0, 7, 27]
];
*/
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
for (i in a) {
    for (j in a[i]) {
        console.log(a[i][j]);
    }
}
/* task.6
Write a program that outputs the sum of squares of the first 20 numbers. */
var sum = 0;
var x;
for (i = 1; i < 21; i++) {
    x = i * i;
    sum += x;
}
console.log(sum);

/*task.7
Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 
David 80, Marko 77, Dany 88, John 95, Thomas 68,
The grades are computed as follows : < 60% F,< 70% D,< 80% C,< 90% B,< 100%  A */
var David = [80, 60, 100];
var sum = 0;

for (i in David) {
    sum = sum + David[i];
}
var average = sum / David.length;
console.log(average);

if (average < 60) {
    console.log("F");
} else if (average < 70) {
    console.log("D");
} else if (average < 80) {
    console.log("C");
} else if (average < 90) {
    console.log("B");
} else if (average < 100) {
    console.log("A");
}
/* task.8
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

*/

for (i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//---------------------------------------------
var message = " Good morning!";
var i;
for (i = 1; i < 4; i = i + 1) {
    console.log(message);
}
console.log("Done.");

//--------------------------------------------


var a = [6, 5, 7, 9, 11, 5, 10];
var max = a[0];
var i;

for (i = 1; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
    }
}
console.log(max);

// minimum
var min = a[0];
var position = 0;

for (i = 1; i < a.length; i++) {
    if (a[i] <= min) {
        min = a[i];
        position = i;
    }
}
console.log(min + " is on the position " + position);
//**************************** */
n = 4;
s = "*";

for (r = 0; r <= n - 1; r++) {
    if (r == 0 || r == n - 1) {
        var line = "";
        for (i = 0; i < n; i++) {
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

//zamena mesta min i max


var a = [6, 5, 7, 9, 11, 8, 10];
var max = a[0];
var maxPosition = 0;
var i;
for (i = 1; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
        maxPosition = i;
    }
}
console.log(max + " is on the position " + maxPosition);
// ----------------------min
var min = a[0];
var minPosition = 0;

for (i = 1; i < a.length; i++) {
    if (a[i] <= min) {
        min = a[i];
        minPosition = i;
    }
}
console.log(min + " is on the position " + minPosition);
var temp;
temp = a[maxPosition];
a[maxPosition] = a[minPosition];
a[minPosition] = temp;
console.log(a);
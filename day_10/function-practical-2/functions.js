/*task.1
Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false*/
function check(a) {
    if (typeof a == "string") {
        console.log(true)
    } else {
        console.log(false)
    }
}
check(12);


/* task.2
Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false */
function blank(a) {
    if (typeof a !== "string") {
        console.log(false)
    } else if (a === "") {
        console.log(true)
    } else {
        console.log(false)
    }
}
blank(15);


/* task.3 
Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
"Ha", 3 -> "HaHaHa" */
function concat(a, n) {
    var newString = "";
    for ( i = 0; i < n; i++ ) {
        newString += a;
    }
    return newString;
}
console.log(concat("Ha", 5));
    

/* task.4
Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */
function countChar(string, letter) {
    var counter = 0;

    for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
            counter += 1;
        }
    }
    return counter;
}
var n = countChar("hello", "l");
console.log(n);


/*task.5
Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.*/
function firstPosition(string, letter) {
    for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
            return i + 1;
        }
    }
    return -1;
}
console.log(firstPosition("qwertyui", "w"));


/*task.6
Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.*/

function lastPosition(string, letter) {
    for (var i = string.length - 1; i >= 0; i--) {
        if (letter === string[i]) {
            return i + 1;
        }
    }

    return -1;
}
console.log(lastPosition("qwertywwwui", "b"));


/*task.7
Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]*/
function stringToArr(a) {
    var arr = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] == " ") arr[i] = null;
        else arr[i] = a[i];
    }
    return arr;
}
console.log(stringToArr("Good morning!"));


/* task.8
Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/
function prime(a) {
    if (a == 2) return true;
    if (a % 2 == 0 && a > 2) return false;
    for (i = 3; i < a.sqrt; i += 2) {
        if (a % i == 0) return false;
    }
    return true;
}
console.log(prime(7));


/* task.9
Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string" */
function replace(str, a) {
    var newStr = "";
    if (a === undefined) {
        a = "_";
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newStr += a;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(replace("My random string"));


/*task.10
Write a function to get the first n characters and add “...” at the end of newly created string.*/
function firstN(a, b) {
    var dots = "";
    for (i = 0; i < b; i++) {
        dots += a[i];
    }
    dots += "..."
    return dots;
}
console.log(firstN("String", 6));


/*task.11
 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */
function filterNonNum(a) {
    var arr = [];
    var j = 0;
    for (i = 0; i < a.length; i++) {
        var check = a[i] * 1;
        console.log(check);
        if (isNaN(check) || !isFinite(check)) continue;
        if (typeof check == "number") {
            arr[j] = check;
            j++
        }
    }
    return arr;
}
console.log(filterNonNum(["1", "21", undefined, "42", "1e+3", Infinity]));


/* task.12
Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.  */
function retire(yearOfBirth, gender) {
    var age = 2018 - yearOfBirth;
    if (gender == "m") {
        if (age < 65) {
            return (65 - age);
        } else {
            return "You are already retired."
        }
    } else if (gender == "f") {
        if (age < 60) {
            return (60 - age);
        } else {
            return "You are already retired."
        }
    }
}
console.log(retire(1949, "m"));


/* task.13 
Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
Hint: num % 100 >= 11 && num % 100 <= 13  */
function humanNum(a) {
    if (a % 100 < 11 || a % 100 > 13) {
        switch (a % 10) {
            case 1:
                a += "st";
                break;
            case 2:
                a += "nd";
                break;
            case 3:
                a += "rd";
                break;
            default:
                a += "th";
        }
    } else a += "th";

    return a;

}
console.log(humanNum(73));
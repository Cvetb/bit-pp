'use strict'
/* task 1. Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;*/

function convert(x) {

  return x.toString(16);
}

console.log(convert(12));
/* task 2.  Write a JavaScript function that reverses a number.*/

function reverse(n) {

  return n.toString().split("").reverse().join("");
  /*  n = n + "";
	return n.split("").reverse().join(""); */

}
console.log(reverse(256));
console.log(reverse("JavaScript"));

/* task 3.  Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string. */
function alphabet(str) {

  return str.split('').sort().join('').trim();

}
console.log(alphabet('Belgrade'));

/* task 4. Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z. */

/* task 5. Write a function to split a string and convert it into an array of words. */
var myString = 'JavaScript-function-that reverses a number';
var splits = myString.split(' ', 4);

console.log(splits);
/* task 6.Write a function to convert a string to its abbreviated form. */
 var abb = function (a) {
  var b = a.trim().split(" ");
  if (b.length > 1) {
    return (b[0].charAt(0) + b[1].charAt(0) + b[3].charAt(0))
  }
  return b[0];
};
console.log(abb("Belgrade Institute of Technology"));

/* task 7. Write a function that can pad (left, right) a string to get to a determined length.*/
function f(pad, str, position)
{
  if (typeof str === 'undefined') 
    return pad;
  if (position == 'l')
     {
     return (pad + str).slice(-pad.length);
     }
  else 
    {
    return (str + pad).substring(0, pad.length);
    }
}
console.log(f('Zrenjaninski',123,'l'));
console.log(f('Zrenjaninski',123,''));

/* task 8. Write a function to capitalize the first letter of a string. */
function capitalize(str) {

  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize('hello world'));

/* task 9. Write a function to hide email addresses to protect them from unauthorized users.*/
function protect(user_email) {
  var x, spl, one, two;
  spl = user_email.split("@");
  one = spl[0];
  two = spl[1];
  x = one.length / 2;
  one = one.substring(0, (one.length - x));

  return one + "...@" + two;
};

console.log(protect("brankacvet@example.com"));

/* task 10.Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';  */
function swap(str) {
  var newstr = "";
  var a = str.length;
  for (var i = 0; i < a; i++) {
  if (str[i] === str[i].toLowerCase()) {
  newstr += str[i].toUpperCase();
  } else {
  newstr += str[i].toLowerCase();
  }
  }
  return newstr;
  
  
}
console.log(swap('The Quick Brown Fox'));

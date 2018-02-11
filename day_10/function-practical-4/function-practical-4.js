/* task.1
Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no   */
function check(e, arr) {
    var result;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == e) {
            result = "yes";
            break;
        } else {
            result = "no";
        }
    }
    return result;
}

console.log(check(7, [5, -4.2, 3, 7]));


/* task.2
Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]   */
function multiplyPositiveElements(array) {
    var i = 0;
    for (i = 0; i < array.length; i++) {

        if (array[i] > 0) {

            array[i] = array[i] * 2;
        }
    }
    return array;
}
console.log(multiplyPositiveElements([-3, 11, 5, 3.4, -8]));


///drugi nacin
function multiplyPositiveElements(array) {
    var i = 0;
    var b = [];
    for (i = 0; i < array.length; i++) {

        if (array[i] > 0) {

            var product = 0;

            product = array[i] * 2;

            b[i] = product;
        } else {
            b[i] = array[i];
        }
    }
    return b;
}
console.log(multiplyPositiveElements([-3, 11, 5, 3.4, -8]));


/*task.3
Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3   */
function minArray(arr) {
    var min = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(minArray([4, 2, 2, -1, 6]));

/*task.4
Write a program that finds the second largest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2   */
function secLargest(arr) {
    var min = arr[0];
    var sec = arr[0];
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < arr[0]) {
            min = arr[i];
        }
        for (var i = 0; i < arr.length; i++) {

            if (arr[i] < sec && arr[i] > min) {
                sec = arr[i];
            }
        }
        return sec;
    }
}
console.log(secLargest([4, 2, 2, -1, 6]));


/*task.5
Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16   */
function sumPositiveElements(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum = sum + array[i];
        }
    }
    return sum;
}
console.log(sumPositiveElements([3, 11, -5, -3, 2]));

/* task.6
Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.  */
function symmArr(arr) {
    var n = arr.length - 1;
    for (i = 0; i < arr.length; i++) {
        if (arr[0 + i] !== arr[n - i]) {
            return "The array isn’t symmetric.";
            break;
        }
    }
    return "The array is symmetric";
}
console.log(symmArr([2, 4, -2, 7, -2, 4, 2]));

/* task.7
Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]   */
function fuse(a, b) {
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
console.log(fuse([4, 5, 6, 2], [3, 8, 11, 9]));


/*task.8
Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]  */
function concat(a, b) {

    var i;
    var j;
    var k = 0;
    var c = [];

    for (i = 0; i < a.length; i++) {
        c[k] = a[i];
        k++;
    }

    for (j = 0; j < b.length; j++) {
        c[k] = b[j];
        k++;
    }
    return c;
}

console.log(concat([4, 5, 6, 2], [3, 8, 11, 9]));


/*task.9
Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]   */
function destroyer(e, arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        } 
            return newArr;
    }

console.log(destroyer([4, 6, 2, 8, 2, 2]));

/*task.10
Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]   */

function inserts(e, p, arr) {
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++) {

        return newArr;
        break;
        }
        return ("Error!");
    }
    
console.log(inserts( 78, 3, [2, -2, 33, 12, 5, 8]));

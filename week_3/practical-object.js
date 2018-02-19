// Write a functional expression that duplicates each element of a given array.

var duplicate = function (arr) {
    var newArr = [];
    for (var i = 0, j = 0; i < arr.length; i++ , j += 2) {
        newArr[j] = arr[i];
        newArr[j + 1] = newArr[j];
    }
    return newArr;
}
console.log(duplicate([2, 4, 7, 11, -2, 1]));

// Write a functional expression that removes all duplicates in a given array.

var cut = function (arr) {
    var newArr = [];
    var marker;
    newArr[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
        marker = false;
        for (var j = 0; j < newArr.length; j++) {
            if (arr[i] == newArr[j]) {
                marker = true;
            }
        }
        if (marker == false) {
            newArr[j] = arr[i];
        }
    }
    return newArr.sort(function (a, b) { return a - b; });
}

console.log(cut([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

//a) Write a function that checks if a given array has odd number of elements.
//b) Write a function that counts a number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 

function elemOdd(arr) {
    if (arr.length % 2 == 0) {
        return false;
    }
    return true;
}

function lessThanMiddle(arr) {
    var counter = 0;
    var middle;
    if (elemOdd(arr)) {
        middle = arr[(arr.length - 1) / 2];
        var i = 0;
        for (i in arr) {
            counter += arr[i] < middle;
            // console.log(i, arr[i], arr[i]<middle);
            i++;
        }
        return counter;
    }
    return "ERROR";
}
console.log(lessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
function min(arr) {
    var minimum = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    for (i = arr.length - 1; i >= 0; i--) {
        if (minimum == arr[i]) {
            break;
        }
    }
    return { min: minimum, index: i };

}
console.log(min([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

// Write a function that finds all the elements in a given array less than a given element. 

function lessThan(arr) {
    var i = 0;
    var newArray = [];
    var index = parseInt(arr.length / 2);
    for (i in arr) {
        if (arr[i] < arr[index]) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}
// console.log(lessThan([2,3,87,5,7,9,5,3], 5));
/*Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. */

function startsWith(arr) {
    var i = 0;
    var newArray = [];
    for (i in arr) {
        if ("pro" == arr[i].substr(0, 3).toLowerCase()) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
// console.log(startsWith(["problem", "professor", "proactive", "parabolic", "perfect"], "pro"));

/*Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. */

function filter(arr, filterFunc) {
    return filterFunc(arr);
}

console.log(filter(["prOblem", "PROfessor", "pRoactive", "parabolic", "perfect"], startsWith));
//Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product.

var shoppingList = [{ name: "kravica", price: 89.865 }, { name: "rouch", price: 90 }, { name: "dove", price: 70 }];

var sum = 0;
function totalPrice(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].price;
    }
    return sum;

}
// console.log(totalPrice(shoppingList));

function avgPrice(arr) {
    var sum = totalPrice(arr);
    return (sum / arr.length).toFixed(3);
}
function highestPrice(arr) {
    var max = arr[0].price;
    var name;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].price > max) {
            max = arr[i].price;
            name = arr[i].name.toUpperCase();
        }
    }
    return name;
}

console.log(avgPrice(shoppingList));

// 7. Write a function that checks if a given string is written in all capitals
function stringValidator(str) {
    if (str.toUpperCase() === str) {
        return true;
    }
    return false;
}
//console.log(stringValidator("Hello"));
function passwordValidator(str) {
    var i = 0;
    for (i in str) {
        if (str[i] >= "0" && str[i] <= "9") {
            return true;
        }
    }
    return false;
}
// console.log(passwordValidator("He2llo"));
function colorValidator(str) {
    if (str.length == 7) {
        if (str[0] === "#") {
            for (var i = 1; i < str.length; i++) {
                if (!(str[i] >= '0' && str[i] <= 'F' || str[i] >= 'a' && str[i] <= 'f')) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
// console.log(colorValidator("#FFFFFF"));
function yearValidator(year) {
    return (year >= 1900 && year <= 2018) ? true : false;
}
// console.log(yearValidator(1998));

function validator() {
    var validObj = {};
    validObj.value = '';
    validObj.stringValidator = function () {
        if (this.value.toUpperCase() === this.value) {
            return true;
        }
        return false;
    }
    validObj.passwordValidator = function () {
        var i = 0;
        for (i in this.value) {
            if (this.value[i] >= "0" && this.value[i] <= "9") {
                return true;
            }
        }
        return false;
    }
    validObj.colorValidator = function () {
        if (this.value.length == 7) {
            if (this.value[0] === "#") {
                for (var i = 1; i < this.value.length; i++) {
                    if (!(this.value[i] >= '0' && this.value[i] <= 'F' || this.value[i] >= 'a' && this.value[i] <= 'f')) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }
    validObj.yearValidator = function () {
        return (this.value >= 1900 && this.value <= 2018) ? true : false;
    }
    return validObj;
}

console.log(validator());


var k = {p:1};
console.log (k = new String({p:1}));
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

// 3

var rotateElements = function (arr, k) {
    var rotatedArray = [];
    var i;
    var j;
    // prebacujemo od k-tog elementa
    for (i = k, j = 0; i < arr.length; i++ , j++) {
        rotatedArray[j] = arr[i];
    }
    // prebacujemo do k-tog elementa
    for (i = 0; j < arr.length; j++ , i++) {
        rotatedArray[j] = arr[i];
    }
    return rotatedArray;
}

console.log(rotateElements([1, 2, 3, 4, 5, 6], 2));

// 4

var numToDigits = function (n) {
    var arr = [];
    var str = n + '';
    for (i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }

    return arr;
}
console.log(numToDigits(123));

// 5
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
// 6
var celsiusToF = function (t) {
    var f = (t * 1.8) + 32;
    return f;
}
console.log(celsiusToF(35));
// 9
var median = function (a) {
    var medianIndex = 0;
    if (a.length % 2 == 1) {
        medianIndex = (a.length - 1) / 2;

    }
    return a[medianIndex];
}
console.log(median([1, 2, 3, 4, 5, 6, 7]));

// 11

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

// 14
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
}
else if (result > 25 && result < 30) {
    console.log("Overweight");
}
else if (result > 30 && result < 40) {
    console.log("Obese");
}
else if (result > 40 ) {
    console.log("Morbidly");
}
}


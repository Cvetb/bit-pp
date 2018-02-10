/*Spoj dva sredjena niza u novi jedinstven niz*/

function merge(a, b) {
    /*index of the element in the array a */
    var i;
    /*index of the element in the array b */
    var j;
    /*index of the element in the array k */
    var k;

    var c = [];

    for (i = 0, j = 0, k = 0; i < a.length && j < b.length; k++) {
        //a[i], b[j] - poredimo
        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
        }
        else {
            c[k] = b[j];
            j++;
        }
    }

    if (i == a.length) {
        for (; j < b.length; j++ , k++) {
            c[k] = b[j];
        }

    }
    else {
        for (; i < a.length; i++ , k++) {
            c[k] = a[i];
        }
    }

    return c;

}

var firstArray = [4, 6, 11, 18, 32];
var secondArray = [-1, 7, 13, 15];
var finalArray = merge(firstArray, secondArray);
console.log(finalArray)

//-----------------------------------------------------vezba1

//nadovezi niz a i b gde je a = [3,4,-2] ; b = [8, 7] OUTPUT = [3,4,-2,8,7]

function combine(a, b) {
    var i;
    var j;
    var k = 0;
    var c = [];

    for (i = 0; i < a.length; i++) {
        c[k] = a[i];
        k++;
    }

    for (j = 0; j < b.length; j++) {
        c[k] = b[j]
        k++;
    }

    return c;

}

console.log(combine([3, 4, -2], [8, 7]))

//-----------------------------------------------------vezba2

//nadovezi niz a i b gde je a = [3,8,7] ; b = [6, 4, 13] OUTPUT = [3, 6, 8, 4, 7, 13]

function fuse(a, b) {
    var j = 0;
    var c = [];

    for (i = 0; i < a.length; i++) {
        c[j] = a[i];
        j++;
        c[j] = b[i];
        j++;
    }
    return c;
}
console.log(fuse([3, 8, 7], [6, 4, 13]));

//-----------------------------------------------------functions practical 4
//-----------------------------------------------------1

function check(e, arr) {
    var result;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == e) {
            result = "yes";
        }
        else {
            result = "no";
        }

    }
    return result;
}

console.log(check(5, [5, -4.2, 3, 7]))


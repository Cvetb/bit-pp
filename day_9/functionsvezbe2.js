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


//drugi nacin
function multiplyPositiveElements(array) {

    var i = 0;
    var b = [];
    for (i = 0; i < array.length; i++) {

        if (array[i] > 0) {

            var product = 0;

            product = array[i] * 2;

            b[i] = product;
        }
        else {
            b[i] = array[i];
        }

    }


    return b;

}

console.log(multiplyPositiveElements([-3, 11, 5, 3.4, -8]));
 // 4. zadatak 

 
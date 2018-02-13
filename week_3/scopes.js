'use strict';
function occCounter(arr) {

    var counters = [];
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }
        counters[i] = counter;
        counter = 0;

    }
    //console.log(counters);
    for (var i = 0; i < counters.length; i++) {
        for (var j = 0; j < counters.length; j++) {
            if (counters[i] >= counters[j]) {

                if (j == (counters.length - 1)) {
                   // console.log(counters[i]);
                    console.log("Most frequently occurs " + arr[i]);
                    return 1;
                }
                

            }

        }
    }

}
occCounter([1, 2, 4, 3, 4, 4, 5, 6, 5, 4, 3, 4]);
var shuffle = function (a) {

    var newArr = [];

    for (var i= 0; i < a.length; i++) {

        Math.random();

        newArr[0] = a[i];

        newArr.push(a[i]);


    }
    return newArr;
}
console.log(shuflle [2,3,1,7,8]);
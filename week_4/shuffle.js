var shuffle = function (a) {

    var newArr = [];
    var usedIndexes = [];
    for (var i = 0; i < a.length;) {

        var randomIndex;
        randomIndex = Math.floor(Math.random() * a.length);

        if (usedIndexes.indexOf(randomIndex) == -1) {

            newArr.push(a[randomIndex]);
            usedIndexes.push(randomIndex);
            i++;

        }
        else {
            continue;
        }
    }
    return newArr;
}
console.log(shuffle([1,2,3,4,5,6,7]));
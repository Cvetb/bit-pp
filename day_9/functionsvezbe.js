//izdvojiti cifre i sabrati ih

function sumOfDigits(n) {

    var sum = 0;
    var lastDigit;

    while (n > 0) {

        lastDigit = n % 10;

        n = (n - lastDigit) / 10;

        sum = sum + lastDigit;

    }

    return sum;

}

console.log(sumOfDigits(481));

//sabrati prvu i poslednju cifru (?)

function sumOfDigits(n) {

    var sum = 0;
    var lastDigit;

    while (n > 0) {

        lastDigit = n % 10;

        n = (n - lastDigit) / 10;



    }

    return sum;

}

console.log(sumOfDigits(481));

//maximum
function maxNumber(a, b) {
    var max;
    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    return max;
}
console.log(maxNumber(5, 9));

//arithmetic 4 
function arithmeticMean(a, b, c, d) {
    var arm;
    arm = (a + b + c + d) / 4;
    return arm;
}
console.log(arithmeticMean(5, 7, 9, 6));

//7. zadatak

function numbOfDigits(n) {


}
console.log(numbOfDigits(45876))

//9. zadatak

function sumOfOdd(n) {
    var sum = 0;

    for (var i = 0; i < n.length; i++) {
        if (n[i] % 2 !== 0) {
            sum = sum + n[i];
        }
    }

    return sum;
}

var arr = [3, 5, 5, 6];
console.log(sumOfOdd(arr));

//10. zadatak

function countNumberOfLetter(text) {

    if (typeof text == "string") {
        var n = 0;
        for (var i = 0; i < text.length; i++) {

            if (text[i] == "a" || text[i] == "A") {
                n++;
            }
        }
        console.log(n);
    } else {
        console.log("Input is not a string");
    }
}


countNumberOfLetter("HELLOa jklAAAkujjgaa");


//letter.toUpperCase() a --> A

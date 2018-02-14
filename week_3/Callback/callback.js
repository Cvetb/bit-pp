
//-------------------------------------------1)

function small() {
    return 8;
}

function large() {
    return 158;
}

function huge() {
    return 243568;
}

function generateNumber(f) {

    if (typeof f !== "function") {

        return "Not Valid Input";
    }
    return f();
}

console.log(generateNumber(large));

//-------------------------------------------2) niz, callback f-ija koja kvadrira vrednost zadatog broja
var a = [5, 2, 4, 3]

function square(n) {
    return n * n;
}

function squareNumber(a, f) {
    var b = [];

    for (var i = 0; i < a.length; i++) {

        b[i] = f(a[i]);

    }

    return b;
}

console.log(squareNumber(a, square));

//-------------------------------------------3)

a = [4, 2, 3, 4]
b = [7, 8, 9, 7]

function sum(a, b) {

    return a + b;
}



function sumArrays(a, b, f) {

    var c = [];

    for (i = 0; i < a.length; i++) {

        c[i] = f(a[i], b[i]);

    }

    return c;
}

console.log(sumArrays(a, b, sum))

//-------------------------------------------4 fija koja zamenjuje nulti i poslednji element niza

function swap (a){
    var tmp;

    tmp = a[0];

    if(a.length == 0){
        return a;
    }

    a[0]=a[a.length-1];

    a[a.length-1]=tmp;

    return a;
}

console.log(swap([1, 5, 7, 3]));

//-------------------------------------------5

function nameSurname(name, surname){

    return function(){

        console.log("Suggested email: " + name + "." + surname + "@gmail.com");

    }

};

nameSurname("tihomir", "pavlovic")();

//-------------------------------------------6 IIFE u zadatoj niski zamenjuje svako "a" slovo zvezdicom (ispisati rezultat) i vraca broj zamena.

console.log((
    function (a) {
        var b = "";
        var star = 0;

        for (var i  = 0; i < a.length; i++){
            if (a[i] == "a"){
                b += "*";
            } else {
                b += a[i];
            }
            for (var j = 0; j < b.length; j++){
                if(b[j] == "*"){
                star ++;
                }
            }
        }

        return b;
    }

)("javascript"))
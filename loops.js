var sum = 0;
for (i = 1; i < 1000; i++){
    if ( i % 3 === 0 && i % 5 === 0) {
        sum = sum + i;
    }
}
console.log(sum);

//----------------------------------------------------------------
var result = "";
var x = [ '1', 'A', 'B', "c", "r", true, NaN, undefined];

for (var i in x) {

result +=  x[i];
}
console.log(result);
//------------------------
var sum = 0;
var x;
for ( i = 1; i < 21; i++) {
    x = i * i;
    sum += x;
}
console.log(sum);
//-------------------------


for (i = 1; i < 101; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//---------------------------------------------------------------------------
var message = " Good morning!";

var i;

for (i = 1; i < 4; i = i + 1) {

    console.log(message);
}

console.log("Done.");

//-------------------------------------

for(i = 0; i < 16; i++){
    if(i % 2 === 0){
        console.log(i+" is even number");
    } else {
        console.log(i+" is odd number");
    }
}

//---------------------------------------

var myArray = [3, 5, 7];
var sum = 0;
var product = 1;
/*
for(i=0; i < myArray.length; i++){
    sum += myArray[i];
    product *= myArray[i];
}
console.log(sum);
console.log(product);
*/
for(i in myArray){
    sum += myArray[i];
    product *= myArray[i];
}
console.log(sum);
console.log(product);
//---------------------------------------------------

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
for(i in a){
    for(j in a[i]){
        console.log(a[i][j]);
    }
}

//---------------------------------------

var David = [80, 60, 100];
var sum= 0;

for (i in David){
    sum = sum + David[i];
}
var average = sum / David.length;
console.log(average);

if (average < 60){
    console.log("F");
} else if (average < 70){
    console.log("D");
} else if (average < 80){
    console.log("C");
} else if (average < 90){
    console.log("B");
} else if (average < 100){
    console.log("A");
}

//----------------------------------

var a = [6, 5, 7, 9, 11, 5, 10];
var max = a[0];
var i;

for (i = 1; i < a.length; i++){
    if(a[i] > max){
        max = a[i];
    }
}
console.log(max);

// minimum
var min = a[0];
var position = 0;

for(i = 1; i < a.length; i++){
    if(a[i] <= min){
        min = a[i];
        position = i;
    }
}
console.log(min + " is on the position " + position);
//**************************** */
n = 4;
s = "*";

for(r = 0; r <= n-1; r++){
    if(r == 0 || r == n-1){
        var line = "";
        for (i = 0; i < n; i ++){
            line += s;
        }
        line = line + "\n"
        console.log(line);
    } else {
        var line = "";
        line = line + s;
        for(i = 0; i < n-2; i++){
            line = line + " ";
        }
        line = line + s;
        line += "\n";
        console.log(line);
    }
}


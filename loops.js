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
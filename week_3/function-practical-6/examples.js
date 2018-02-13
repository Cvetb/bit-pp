var global = 1;
function myFunc () {
    var local = 2;
    global++;
    return global;
}

//-------------------------------


var done = false;
while (done = false) {
//code
}


//-----------------------------------


for (var i = 1; i <= N; i++) {
   var sum = 0;//
    sum = sum + i;
 }
 
 console.log(sum);


 //--------------------------------


 var x = -32.2;
var isPositive = (x > 0);

if (!isPositive) {       //if(isPositive) {
   console.log(x + " is positive");
} else {
   console.log(x + " is not positive");
}


//----------------------------------


var x = -20

if (x > 0);
console.log("positive");


//------------------------------------


var f = 0, g = 1; 

for (var i = 0; i <= 15; i++) {
   console.log(f);
   f = f + g;
   g = f - g;
}//fibonacijev niz


//-------------------------------------


var x = 5;
var y = 3;
var min = (x < y) ? x : y;

console.log(min)


//----------------------------------


function sum(num1, num2) {
    num1 = num1 || 0;
    num2 = num2 || 0;
 
    return num1 + num2;
 }
 
 var result = sum(5);
 console.log(result)


 //------------------------------------


 function square(num) {
    num *= num;
   // return num;
 }
 
 var result = square(10);
 console.log(result)


 //---------------------------------


 function sumNumbers(num1, num2) {
    var result = num1 + num2;
    return 10; //error
 }
 var result = sumNumbers(10, 1);
 console.log(result)
 
 

 
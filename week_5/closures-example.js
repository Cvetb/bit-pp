function Person (name, surname){
    this.name =name;
    this.surname = surname;
    this.print = function(){
        console.log(name, surname);
    }
}
var pera = new Person ('pera', 'peric');
pera.print();

pera.name = 'zika';
pera .print();

//--------------------------------------------------
function selection(a, f){
    var newArray = [];
    for(var i=0; i<a.length; i++){
        if(f(a[i])){
            newArray.push(a[i]);
        }
    }
    return newArray;
}

function lessThan(n){
    return function(x){
        return x<n;
    }
}
var numbers = [2, 6, 23, 11, 89, 4, 5];
var numbersFiltered = selection(numbers, lessThan(10));
console.log(numbersFiltered);


function startsWithPro(s){
    if(s.toLowerCase().indexOf('pro') == 0){
        return true;

    }
    return false;
}
var strings = ['programming', 'abscr', 'product','abc', 'prot' ];
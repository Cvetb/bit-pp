function check(a) {
    if (typeof a == "string") {
        console.log(true)
    } else {
        console.log(false)
    }

}
check(12)


function check2(a) {
    if (typeof a !== "string") {
        console.log(false)
    } else if (a === "") {
        console.log(true)
    } else {
        console.log(false)
    }

}
check2(15)


function check3(a, n) {
    var sum = "";
    //for  (n; n > 0;n--)
    // sum += a;
    do {
        sum += a;
        n--;
    }
    while (n > 0);

    console.log(sum)
}

check3("Ha", 17)


function countChar(string, letter) {
    var counter = 0;

    for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
            counter += 1;
        }

    }
    return counter;
}


var h = countChar("hello", "l");
console.log(h)

//-----------------------------------

function countChar1(string, letter) {
    for (var i = 0; i < string.length; i++) {
        if (letter === string[i]) {
            return i + 1;
        }
    }

    return -1;
}

console.log(countChar1("qwertyui", "w"))

//-------------------
function countChar2(string, letter) {
    for (var i = string.length-1; i >=0; i--) {
        if (letter === string[i]) {
            return i + 1;
        }
    }
    
    return -1;
}

console.log(countChar2("qwertywwwui", "b"))













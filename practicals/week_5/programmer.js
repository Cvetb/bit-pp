function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}
Person.prototype.fullname = function () {
    return this.name + " " + this.surname;
}
Person.prototype.printfullname = function () {
    console.log(this.fullname());

}
var pera = new Person('Pera', 'Peric');
pera.printfullname();

function Programmer(name, surname, language) {
    Person.call(this, name, surname);
    this.language = language;
}
Programmer.prototype = Object.create(Person.prototype);

console.log(Programmer.prototype);

Programmer.prototype.constructor = Programmer;
console.log(Person.prototype);
console.log(Programmer.prototype);

Programmer.prototype.printInfo = function () {

    var fullNameString = Programmer.prototype.fullname.call(this);
    return fullNameString + ' ' + this.language;
    //console.log(this.name, this.surname, this.language);
}


var zika = new Programmer('Zika', 'Zikic', 'js');
console.log(zika);
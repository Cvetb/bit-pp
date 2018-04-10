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

Programmer.prototype = new Object(Person.prototype);

Programmer.prototype.constructor = Programmer;

console.log(Programmer.prototype);


var zika = new Programmer('Zika','Zikic','js');
console.log(zika);
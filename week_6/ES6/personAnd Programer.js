class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    printPersonData() {
        console.log(`(${this.name}, ${this.surname})`);
    }
}
var p = new Person('Pera','Peric');
var z = new Person('Zika','Zikic')
console.log(p);
console.log(z);

class Programmer extends Person{
    constructor({name, surname}, ...languages) {
        super(name, surname);
        this.languages = languages;
    }
    printProgrammerData(){
        super.printPersonData();
        console.log(...this.languages);
    }
    learnNewLanguages(newLanguage){
        this.languages.push(newLanguage);
    }
}

var pera = new Programmer(z,'JavaScript','Python','PHP');
pera.learnNewLanguages('Java');
console.log(pera.languages);
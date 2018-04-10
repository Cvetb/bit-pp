//Employees and Managers
function Employee(name, surname, specialization, salary) {
    this.name = name;
    this.surname = surname;
    this.specialization = specialization;
    this.salary = salary;

} Employee.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

function Manager(name, surname, department, salary) {
    this.name = name;
    this.surname = surname;
    this.department = department;
    this.salary = salary;

}

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDepartment = function (department) {
    this.department = department;
}

var e1 = new Employee('Pera', 'Peric', 'programmer', 500);
var e2 = new Employee('Zika', 'Zikic', 'programmer', 600);

e1.getSpecialization();

var m1 = new Manager('Laza', 'Lazic', 'sales', 700);
console.log(m1);

m1.changeDepartment('analytics');
m1.getDepartment();


var sharedMethods = {
    getData: function () {
        console.log(this.name, this.surname);
    },

    getSalary: function () {
        console.log(this.salary);
    },

    increaseSalary: function () {
        this.salary = this.salary + this.salary / 10;
    }


};

Employee.prototype.__proto__ = sharedMethods;
Manager.prototype.__proto__ = sharedMethods;

e1.getSalary();

m1.getSalary();




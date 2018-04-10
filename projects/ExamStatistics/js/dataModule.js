var dataModule = (function(){
    
    function Subject(name) {
        this.listOfStudents = [];
        this.name = name;
    }

    Subject.prototype.getSubjectName = function() {
        return this.name;
    }

    Subject.prototype.tookExam = function(student) {
        var checker = false;
        this.listOfStudents.forEach(function(person){
            if (student.getStudentData() == person.getStudentData()) {
                checker = true;
                return false;
            }
        })
        return checker;
    }
    var subjectWeb = new Subject('web');
    var subjectJS = new Subject('js');
    var subjectSPA = new Subject('spa');

    var subjects = {
         subjectWeb: subjectWeb,
         subjectJS: subjectJS,
         subjectSPA: subjectSPA

    }

    Subject.prototype.addToSelect = function() {
        // TODO adds created subject to select dropDown
    }

    function Student(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Student.prototype.getStudentData = function() {
        return this.name + ' ' + this.surname;
    }

    function Exam(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    Exam.prototype.getExamInfo = function() {
        return this.subject.getSubjectName() + ', ' + this.student.getStudentData() + ', ' + this.grade;
    }

    Exam.prototype.hasPassed = function() {
        if (this.grade > 5) {
            return true;
        } else {
            return false;
        }
    }

    function createSubject(name){
        var s = new Subject(name);
        return s;
    }
    function createStudent(name, surname){
        var s = new Student(name, surname);
        return s;
    }
    function createExam(subject, student, grade){
        var s = new Exam(subject, student, grade);
        return s;
    }
    

    return {
        createSubject : createSubject,
        createStudent : createStudent,
        createExam : createExam,
        subjects: subjects
    }

})();
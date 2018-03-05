function Exam(subject, student, grade) {
    Subject.call(this, subjectName);
    Student.call(this, name, surname);
    this.grade = this.grade;
}

Exam.prototype.getExamInfo = function () {
    return this.subject.getSubjectName() + ' ' + this.student.getStudentData() + ' ' + this.grade;
}

Exam.prototype.hasPassed = function () {
    if (this.grade > 5) {
        return true;
    }
    return false;
}

function createExam(subject, student, grade){
    
    (function() {
        for(var i = 0; i < allStudents.length; i++){
            if( ){
                return ;
            }
        }
        allStudents.push(student);  
        })()
    return new Exam(subject, student, grade);
}
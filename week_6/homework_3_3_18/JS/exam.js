function Exam(subject, student, grade) {
    Subject.call(this, subjectName);
    Student.call(this, name, surname);
    this.grade = this.grade;
}

Exam.prototype.getExamInfo = function () {
    return this.subject + ' ' + this.student + ' ' + this.grade;
}

Exam.prototype.hasPassed = function () {
    if (this.grade > 5) {
        return;
    }
    return;
}
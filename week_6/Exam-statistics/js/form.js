var subjectNameInput = document.querySelector(".subject");
var studentNameInput = document.querySelector(".studentname");
var studentGradeInput = document.querySelector(".studentgrade");
var passedStudentsList = document.querySelector(".passed-students");
var failedStudentsList = document.querySelector(".failed-students");
var addButton = document.querySelector(".add-button");
var errorDiv = document.querySelector(".error");

button.addEventListener("click", addExam);

function addExam() {


    function getFormData() {
        var formData = {};
        var subjectName = subjectNameInput.value;
        var studentName = studentNameInput.value;
        var studentGrade = studentGradeInput.value;

        return formD
    }

    function validateData() {
        if (student == "") {
            return error.innerHTML = "Please enter the name and the surname";
        }
    }

    var exam = new Exam()

    function updateList() {
        if (exam.hasPassed()) {

        } else {

        }

    }
};
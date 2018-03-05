var UIModule = (function(){

    var UISelectors = {
        subjectNameSelector : ".subject", 
        studentSelector: ".studentname", 
        studentGradeSelector: ".studentgrade", 
        buttonSelector: ".add-button"
    }

var subjectName = document.querySelector(UISelectors.subjectNameSelector);
var student = document.querySelector(UISelectors.studentSelector);
var studentGrade = document.querySelector(UISelectors.studentGradeSelector);
var button = document.querySelector(UISelectors.buttonSelector);


function getFormData(){
    var formData = {};
    formData.subject = subjectName.value;
    formData.student = student.value;
    formData.studentgrade = studentGrade.value;

    return formData;
}

function validateData(){
   if(subjectName == "-")

   
}



})();



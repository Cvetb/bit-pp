var selectedSubject = document.querySelector('#add-subject');
var optionS = selectedSubject.selectedIndex;
var subject = selectedSubject.options[optionS].value;

var name = document.querySelector('#add-student-name').value;

var selectedGrade = document.querySelector('#add-grade');
var gradeIndex = selectedGrade.selectedIndex;
var grade = selectedGrade.options[gradeIndex].value;

var passedList = document.querySelector('.passed-list');
var failedList = document.querySelector('.failed-list');

var add = document.querySelector('#add');

passedList.document.querySelector(".passed-list").innerHTML = "<li>" + +"</li>";
failedList.document.querySelector(".failed-list").innerHTML = "<li>" + +"</li>";
document.querySelector('#add').addEventListener('click', );

function () {

}

var error = {
    OK: 'OK',
    SELECT_SUBJECT: 'Please select the subject!',
    INSERT_NAME: 'Please insert the full name!',
    SELECT_GRADE: 'Please select the grade!'
}

function validation(subject, student, grade) {
    if (subject === '-') {
        return error.SELECT_SUBJECT;
    } else {
        if (student === '') {
            return error.INSERT_NAME;
        }
    } else {
        if (grade === '-') {
            return error.SELECT_GRADE;
        }
    }
    return error.OK;
}

if (errorStatus !== error.OK) {
    document.querySelector('#error').innerHTML = "<p>" + errorStatus + "</p>";
}


var errorStatus = validation(subject, student, grade);

function () {

}
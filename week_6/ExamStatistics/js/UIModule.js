var UIModule = (function () {

    var UISelectors = {
        addSubject: '.add-subject',
        addStudentName: '.add-student-name',
        addGrade: '.add-grade',
        addButton: '.add-btn'
    }
    var subject = document.querySelector(UISelectors.addSubject);
    var studentName = document.querySelector(UISelectors.addStudentName);
    var grade = document.querySelector(UISelectors.addGrade);

    var status = {
        OK: "OK",
        MISSING_SUBJECT: "Please choose a subject!",
        MISSING_NAME_SURNAME: "Please enter student name!",
        MISSING_GRADE: "Please enter a grade!",
        INVALID_NAME_FORMAT: "Please format student name correctly!",
        INVALID_GRADE: "Please enter a valid grade! (5-10)"
    }

    function getFormData() {
        var data = {};
        data.subject = subject.value;
        data.name = studentName.value.split(' ')[0];
        data.surname = studentName.value.split(' ')[1];
        data.grade = grade.value;

        return data;
    }
    function checkName(name, surname) {
        var s = false;
        if (name[0] == name[0].toUpperCase() && surname[0] == surname[0].toUpperCase()) {
            s = true;
        }
        return s;
    }

    function validation(data) {
        if (!data.subject) {
            return status.MISSING_SUBJECT;
        }
        if (!data.name && !data.surname) {
            return status.MISSING_NAME_SURNAME;
        }
        if (!checkName(data.name, data.surname)) {
            return status.INVALID_NAME_FORMAT;
        }
        if (!data.grade && !(data.grade == 0)) {
            return status.MISSING_GRADE;
        }
        if (!(data.grade <= 10 && data.grade >= 5 && (data.grade % 1 == 0))) {
            return status.INVALID_GRADE;
        }
        return status.OK;
    }

    function setError(message) {
        if (message != "OK") {
            alert(message);
        }
    }

    return {
        getFormData: getFormData,
        validation: validation,
        UISelectors: UISelectors,
        status: status,
        setError: setError
    }
})();
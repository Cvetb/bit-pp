var numOfPassed = 0;
var numOfFailed = 0;
var allExames = [];

document.querySelector('#add').addEventListener('click', createRank);

function createRank(event) {
    var sub = new Subject(this.subjectName);
    var stud = new Student(this.name, this.surame);
    var exam = createExam(subjectName, name, surname, grade);
    allExams.push(exam);

    var liSt = document.createElement('li');
    var content = document.createTextNode(exam.getExamInfo());
    liSt.appendChild('content');

    if (exam.hasPassed()) {
        var list = document.querySelector('.passed-list');
        list.appendChild(liSt);
        numOfPassed++;
    } else {
        var list = document.querySelector('.failed-list');
        list.appendChild(liSt);
        numOfFailed++;
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
            } else {
                if (grade === '-') {
                    return error.SELECT_GRADE;
                }
            }
            return error.OK;
        }
        }

        if (errorStatus !== error.OK) {
            document.querySelector('#error').innerHTML = "<p>" + errorStatus + "</p>";
        }


        var errorStatus = validation(subject, student, grade);

        var totalNumOfStudents = document.querySelector();
        totalNumOfStudents.innerHTML = allStudents.length - 1;

        var passed = document.querySelector("#count");
        var failed = document.querySelector("#countF");

        passed.innerHTML = numOfPassed;
        failed.innerHTML = numOfFailed;

        var sum = numOfPassed + numOfFailed;
        var percentage = parseInt(100 / (sum / numOfFailed));
        var percentageF = document.querySelector('#percentage');
        percentageF.innerHTML = percentage + '%';
    }
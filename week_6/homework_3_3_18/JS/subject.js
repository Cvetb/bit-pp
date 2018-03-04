function Subject(name) {
this.subjectName = name;
}

Subject.prototype.getSubjectName = function () {
   return  this.subjectName;
}

var subject = new Subject(name);

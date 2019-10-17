// CODE here for your Lambda Classes

class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }
  listsSubjects() {
    return `s favoriteSubjects are ${this.favSubjects.join(",")}`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const instructor = new Instructor({
  name: "John",
  age: 40,
  location: "Los Angeles",
  specialty: "HTML",
  favLanguage: "Java Script",
  catchPhrase: "Where is John Connor?"
});

const student = new Student({
  name: "Smith",
  age: 20,
  location: "New York",
  previousBackground: "Dish Wash",
  className: "CSS121",
  favSubjects: ["HTML", "CSS", "JS"]
});

const pm = new ProjectManager({
  name: "Andy",
  age: 35,
  location: "Texas",
  gradClassName: "JS101",
  tfavInstructor: "Jim"
});

console.log(instructor.demo("HTML"));
console.log(instructor.grade(student, "CSS"));
console.log(student.listsSubjects());
console.log(student.PRAssignment("JS"));
console.log(student.sprintChallenge("JS"));
console.log(pm.standUp("public"));
console.log(pm.debugsCode(student, "HTML"));

function random(max = 100, min = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
Student.prototype.grade = random();
console.log(student.grade);

Instructor.prototype.evaluate = function(student) {
  student.grade -= random(30, 10);
  return `evaluating ${student.name} complete`;
};

console.log(instructor.evaluate(student));
console.log(pm.evaluate(student));

Student.prototype.graduate = function() {
  if (70 < this.grade) return `${this.name} will graduate`;
  else {
    return `${this.name} will not graduate`;
  }
};

console.log(student.graduate());

while (true) {
  console.log(student.graduate());
  if (70 < student.grade) break;
  else {
    student.grade = random();
    console.log(`boosting ${student.name}'s grade`);
  }
}

// CODE here for your Lambda Classes
/* 
#### Person

- First we need a Person class. This will be our `base-class`
- Person receives `name` `age` `location` all as props
- Person receives `speak` as a method.
- This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

#### Instructor

- Now that we have a Person as our base class, we'll build our Instructor class.
- Instructor uses the same attributes that have been set up by Person
- Instructor has the following unique props:
  - `specialty` what the Instructor is good at i.e. 'redux'
  - `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  - `catchPhrase` i.e. `Don't forget the homies`
- Instructor has the following methods:
  - `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  - `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/

class Person {
  constructor(base) {
    this.name = base.name;
    this.age = base.age;
    this.location = base.location;
    this.gender = base.gender;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(atts) {
    super(atts);
    this.specialty = atts.specialty;
    this.favLanguage = atts.favLanguage;
    this.catchPhrase - atts.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} recieves a perfect score on ${subject}!`);
  }
  addOrSub(student) {
    let previous = student.grade;
    let minGrade = 1;
    let maxGrade = 100 - student.grade;
    let random = Math.round(
      (Math.random() - 0.5) * (maxGrade - minGrade) + minGrade
    );
    let final = `${this.name} set ${student.name}'s grade to ${student.grade +
      random} with a difference of ${random}, ${
      student.name
    } had a previous grade of ${previous}.`;
    student.grade = student.grade + random;
    return final;
  }
}

/*
#### Student

- Now we need some students!
- Student uses the same attributes that have been set up by Person
- Student has the following unique props:
  - `previousBackground` i.e. what the Student used to do before Lambda School
  - `className` i.e. CS132
  - `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
- Student has the following methods:
  - `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  - `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  - `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
  */

class Student extends Person {
  constructor(atts) {
    super(atts);
    this.previousBackground = atts.previousBackground;
    this.className = atts.className;
    this.favSubjects = atts.favSubjects;
    this.grade = atts.grade;
  }
  listSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }
  PRAssignment(subject) {
    console.log(`${this.name} had submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun spring challenge on ${subject}`);
  }
  graduate() {
    if (this.grade >= 70) {
      console.log(
        `${this.name} has just graduated from ${
          this.className
        } with a grade of ${this.grade}!`
      );
    } else {
      console.log(`Sorry ${this.name}, but you need to study some more!`);
    }
  }
}

/*
  #### Project Manager

- Now that we have instructors and students, we'd be nowhere without our PM's
- ProjectManagers are extensions of Instructors
- ProjectManagers have the following unique props:
  - `gradClassName`: i.e. CS1
  - `favInstructor`: i.e. Sean
- ProjectManagers have the following Methods:
  - `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  - `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

  */

class ProjectManagers extends Instructor {
  constructor(atts) {
    super(atts);
    this.gradClassName = atts.gradClassName;
    this.favInstructor = atts.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//i.e. ages are made up so please don't take offense ! ♥

// Instructors
const britt = new Instructor({
  name: "Britt",
  location: "Canada",
  age: 35,
  gender: "female",
  favLanguage: "JavaScript",
  specialty: "Everything",
  catchPhrase: "5 minute break!"
});

const josh = new Instructor({
  name: "Josh",
  location: "Lambda",
  age: 32,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Everything",
  catchPhrase: "Let's get this bread!"
});

// TL's / PM's

const carlos = new ProjectManagers({
  name: "Carlos",
  location: "Chicago?",
  age: 32,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Everything",
  catchPhrase: "You guy's got this!",
  gradClassName: "WEBPT7",
  favInstructor: "Britt"
});

const dave = new ProjectManagers({
  name: "Dave",
  location: "Lambda",
  age: 29,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Everything",
  catchPhrase: "I'm a wizard!",
  gradClassName: "WEB23",
  favInstructor: "Josh"
});

// students

const brandy = new Student({
  name: "Brandy",
  location: "USA",
  age: 21,
  gender: "female",
  previousBackground: "HTML/CSS",
  className: "WEB23",
  grade: 50,
  favSubjects: ["JavaScript", "Java", "CSS", "HTML"]
});

const skyler = new Student({
  name: "Skyler",
  location: "USA",
  age: 20,
  gender: "male",
  previousBackground: "Backend",
  className: "WEB23",
  grade: 50,
  favSubjects: ["JavaScript", "Java", "CSS", "HTML"]
});

//----------------------------------------------------------------------------------------------------------------------------------------------------

//Instructors
britt.speak();
britt.demo("HTML");
britt.grade(brandy, "JavaScript");
console.log(britt.specialty);
console.log(britt.favLanguage);
console.log(britt.catchPhrase);

josh.speak();
josh.demo("CSS");
josh.grade(skyler, "Java");
console.log(josh.specialty);
console.log(josh.favLanguage);
console.log(josh.catchPhrase);

//Students
brandy.speak();
brandy.sprintChallenge("JavaScript");
brandy.PRAssignment("JavaScript Sprint");
brandy.listSubjects();
console.log(brandy.previousBackground);
console.log(brandy.className);
console.log(brandy.age);

skyler.speak();
skyler.sprintChallenge("JavaScript");
skyler.PRAssignment("Java");
skyler.listSubjects();
console.log(skyler.previousBackground);
console.log(skyler.className);
console.log(skyler.age);

//Project Managers
carlos.speak();
carlos.demo("Memes");
carlos.grade(skyler, "Food");
carlos.standUp("Web23");
carlos.debugsCode(brandy, "Java");
console.log(carlos.specialty);
console.log(carlos.catchPhrase);
console.log(carlos.favLanguage);
console.log(carlos.favInstructor);
console.log(carlos.gradClassName);

dave.speak();
dave.demo("Harry Potter");
dave.grade(skyler, "Spellcasting");
dave.standUp("Food");
dave.debugsCode(brandy, "Wizardry");
console.log(dave.specialty);
console.log(dave.catchPhrase);
console.log(dave.favLanguage);
console.log(dave.favInstructor);
console.log(dave.gradClassName);

//Stretch methods
console.log(britt.addOrSub(brandy));
console.log(brandy.grade);
brandy.graduate();
console.log(josh.addOrSub(skyler));
console.log(skyler.grade);
skyler.graduate();

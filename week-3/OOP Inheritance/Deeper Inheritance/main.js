class Person {
    constructor(name, startYear) {
      this.name = name;
      this.startYear = startYear;
      this.courses = [];
    }
  
    addCourse(course) {
      this.courses.push(course);
    }
  }
  
  class Student extends Person {
    constructor(name, startYear) {
      super(name, startYear);
      this.grades = [];
    }
  
    //method overriding!
    addCourse(course) {
      if (this.courses.indexOf(course) == -1) {
        super.addCourse(course);
      }
    }
  
    receiveGrade(courseName, finalGrade) {
      this.grades.push({
        course: courseName,
        grade: finalGrade,
      });
    }
  }
  
  class Teacher extends Person {
    constructor(name, startYear, salary) {
      super(name, startYear);
      this.salary = salary;
      this.courses = {};
    }
  
    //method overriding!
    addCourse(course) {
      if (this.courses[course]) {
        return this.courses[course]++;
      }
      this.courses[course] = 1;
    }
  
    giveGrade(studen, cousrName, grade) {
      studen.receiveGrade(cousrName, grade);
    }
  }

class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary)
    }
}



const s1 = new Student("Ronda", 2017)
const ta1 = new TeachingAssistant("Brandon", 2014, 20000)

ta1.addCourse("General Relativity")
ta1.giveGrade(s1, "General Relativity", 91)

console.log(ta1.salary) //prints 20000
console.log(ta1.courses) //prints {"General Relativity": 1}
console.log(s1.grades) //prints [{course: "General Relativity", grade: 91}]


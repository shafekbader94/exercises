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


/********************* */
class Principal extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.teachers = []
    this.students  = []

  }

  hireTeacher(teacher)
  {
    this.teachers.push(teacher)
    console.log(`${this.name} just hired ${teacher.name}`)
    
  } 

  recruitStudent(student)
  {
    this.students.push(student)
  }

  expelStudent(student)
  {
  
    for(let i = 0 ; i<this.students.length ; i++)
    {
      if(student.name === this.students[i].name)
      {
        this.students.splice(i,1)
        i = this.students.length + 1 
      }
    }
  }


transferStudent(student, principal)
{
  this.expelStudent(student)
  principal.recruitStudent(student)
}

}


/********************** */








const p1 = new Principal("Martin", 1991)
localStorage.p1 = JSON.stringify(p1)
let data1 = JSON.parse(localStorage.p1)
const p2 = new Principal("Martha", 1990)
localStorage.p2 = JSON.stringify(p2)
let data2 = JSON.parse(localStorage.p2)

const t1 = new Teacher("Cassandra", 2002, 40000)
localStorage.t1 = JSON.stringify(t1)
let data3 = JSON.parse(localStorage.t1)
const t2 = new Teacher("Kevin", 2006, 30000)
localStorage.t2 = JSON.stringify(t2)
let data4 = JSON.parse(localStorage.t2)

const s1 = new Student("Ronda", 2017)
localStorage.s1 = JSON.stringify(s1)
let data5 = JSON.parse(localStorage.s1)
const s2 = new Student("Byron", 2016)
localStorage.s2 = JSON.stringify(s2)
let data6 = JSON.parse(localStorage.s2)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra
/*
p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron
*/
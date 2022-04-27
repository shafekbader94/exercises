class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    //method overriding!
    addCourse(course) {
        if (this.courses.indexOf(course) == -1) {
            super.addCourse(course)
        }
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}




class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(null, startYear)
        this.salary = salary
        this.name = "Professor " + name
    }


    giveGrade(studen, cousrName, grade) {
        studen.receiveGrade(cousrName, grade)
    }
}

const t1 = new Teacher("Cassandra", 2002, 40000)
console.log(t1.name)


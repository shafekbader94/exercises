let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
]


const updateSalary = function(person){
    if(person.goodPerformance){
        person.salary += 300
    }
}

people.forEach(updateSalary) 

people.forEach(p => console.log(p.salary)) 
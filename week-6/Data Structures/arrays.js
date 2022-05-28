let people = []

let p1 = {
    id: "a0x3",
    name: "Candice",
    age: 23
}

let p2 = {
    id: "q113z",
    name: "Jay",
    age: 16
}

let p3 = {
    id: "kl991",
    name: "Drew",
    age: 31
}

people.push(p1)
people.push(p2)
people.push(p3)

const findPerson = function (personID) {
    for (let p of people) {
        if (p.id === personID) {
            return p
        }
    }
}



const updatePerson = function (personID, newName) {
    let person = findPerson(personID)
    person.name = newName
}


const removePerson = function (personID) {
    for (let p in people) {
        if (people[i].id === personID) {
            return people.splice(i, 1)
        }
    }
}
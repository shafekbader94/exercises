let people = {}

//insert: O(1)
people["a0x3"] = { name: "Candice", age: 23 }
people["q113z"] = { name: "Jay", age: 16 }
people["kl1991"] = { name: "Drew", age: 31 }

//find: O(1)
const findPerson = function (personID) {
    return people[personID]
}

//update: O(1)
const updatePerson = function (personID, newName) {
    return people[personID].name = newName
}

//remove: O(1)
const removePerson = function (personID) {
    delete people[personID]
}


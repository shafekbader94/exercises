let users= mockUsers.slice()

const findFisrtLetterC = function(charC){
    return charC.name.charAt(0)  === 'C'
}


const findingName = users.filter(findFisrtLetterC).map(names => `${names.name}`)

console.log(findingName)

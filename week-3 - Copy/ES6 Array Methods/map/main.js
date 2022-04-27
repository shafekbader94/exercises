let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]


const lowerCase = function(word){
    return word.toLowerCase()
}

let messagesFromDadLowerCase = messagesFromDad.map(lowerCase)

console.log(messagesFromDadLowerCase)

/************ */
let calmMessages = messagesFromDad.map(m => m.toLowerCase())
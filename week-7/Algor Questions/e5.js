String.prototype.camelCase = function(){
    let camelWord = this.split(" ")
    camelWord[0] = camelWord[0].toLowerCase()
    for(let i = 1 ; i < camelWord.length ; i++)
    {
        camelWord[i] = camelWord[i].charAt(0).toUpperCase() + camelWord[i].slice(1)
    }

   camelWord= camelWord.join("")
   
   return camelWord
}


console.log("Hello world".camelCase())



const StringFormatter  = function () {

    const capitalizeFirst = function (aString) {
        let theString = aString.toLowerCase()
        let firstChar = theString.charAt(0)
        firstChar = firstChar.toUpperCase()
        theString= theString.substring(1)
         console.log(firstChar+theString) 

    }
    const skewerCase  = function (aString) {
        let newString = aString.replace(/\s/g, "-")
        console.log(newString)
    }


    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
  
    }
}



const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box



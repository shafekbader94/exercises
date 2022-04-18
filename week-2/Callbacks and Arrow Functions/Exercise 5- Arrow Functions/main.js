

const capitalize = (anyString) => {
  console.log(propCaptilization(anyString))
}

const propCaptilization = (anyString) => {
  let theString = anyString.toLowerCase()
  let firstChar = theString.charAt(0)
  firstChar = firstChar.toUpperCase()
  theString= theString.substring(1)
    return firstChar+theString
  
}

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia




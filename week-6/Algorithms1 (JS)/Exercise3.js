const repeating = function(str){
        
    let count = {}
    let repChar
    for( let i = 0 ; i < str.length ; i++)
    {
        if(count[str[i]] == undefined)
            count[str[i]] = 1
        else
        {
            count[str[i]] = count[str[i]] +1
            repChar = str[i]
            i = str.length +1
        }
    }
    if(repChar == undefined)
        console.log("no duplicats")
    else
        console.log(repChar)

    return repChar
  }
      
  repeating("dog") 
  repeating("race car")
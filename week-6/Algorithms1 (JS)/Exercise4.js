const encrypt = function(str){
        
    let repChar=""
 
    for( let i = 0 ; i < str.length ; i++)
    {
       repChar = repChar + String.fromCharCode(str.charCodeAt(i)+1)
    }
           console.log(repChar)
    return repChar
  }
      
  encrypt("dog") 

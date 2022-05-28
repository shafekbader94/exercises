const reverse = function(str){
        
    let reversed = []
    for( let i = 0 ; i < str.length ; i++)
    {
        reversed[i] = str[str.length - 1 - i]
    }
    reversed = reversed.join('')
    console.log(reversed)

    return reversed
  }
      
  reverse("dog") //should return "god"
  reverse("race car") //should return "rac ecar"
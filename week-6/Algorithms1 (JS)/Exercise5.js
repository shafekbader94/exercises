const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
    
const jumble = function (arr1, arr2) {
  let jumbledArr  = new Set(arr1)
  let newArray = new Set()
  let newArrayJumbled , newArrayFrom
  let size = arr1.length + arr2.length
  let newArray2 = new Set()

  for(let word of arr2)
      if(!(jumbledArr.has(word)))
          newArray.add(word)
     
    for(let word of arr1)
     if(!(newArray.has(word)))
         newArray.add(word)      

         newArrayFrom = Array.from(newArray) 

         while(newArray2.size != size){
            let word = newArrayFrom[Math.floor(Math.random()*size)]
            if(!(newArray2.has(word)))
                 newArray2.add(word) 
         }
   

         newArrayJumbled = Array.from(newArray2) 

        

      return  newArrayJumbled



}
    
console.log(jumble(colors, foods)) 
// could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]

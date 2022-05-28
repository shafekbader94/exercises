 class UniqueArray {
    constructor() {
        this.UniqueArr = []
    }

add(item){
    if(this.UniqueArr[this.UniqueArr.length-1] !== item)
        this.UniqueArr.push(item)
}

showAll(){
console.log(this.UniqueArr)
}


exists(item){
    const arrayset = new Set(this.UniqueArr)
        if(arrayset.has(item))
            return true
    return false
       /* if(this.UniqueArr[this.UniqueArr.length-1] === item)
            return true*/

}
get(index){
   
    if(this.UniqueArr[index] == undefined)
          return -1
    else
         return this.UniqueArr[index]
}

}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"

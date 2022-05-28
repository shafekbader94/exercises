const rawDist = {
    A: 60,
    B: 10,
    C: 10,
    D: 20
}

function getLetter(){
    const percentage = Math.random() * 100
  /*  for (let v in rawDist) {
      }*/


    if(percentage < rawDist.A)
         console.log("A") 
    else if(percentage < rawDist.A + rawDist.B)
         console.log("B")
    else if(percentage < rawDist.A + rawDist.B + rawDist.C)
         console.log("C")
    else 
         console.log("D")

}

getLetter()
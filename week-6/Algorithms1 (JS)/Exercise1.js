function printStarSeries(num, count) {
  let x = 1;
let star = ""
for(let i = 0 ; i <count ; i++){
  while (x <= num) {
    star = star + "*"
    console.log(star + "\n")
    x++
    
  }
  x = num-1
 
  while (x <= num && x > 0) {

    star = star.slice(1)
    console.log(star + "\n")
    x--
    
  }
  star=""
  x=1
   console.log("\n")  
}
}


printStarSeries(5,3)
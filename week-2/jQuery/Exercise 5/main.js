const fruits = [
  { name: "Orange", color: "orange" },
  { name: "Banana", color: "yellow" },
  { name: "Coconut", color: "brown" },
  { name: "Kiwi", color: "brown" },
  { name: "Lemon", color: "yellow" },
  { name: "Cucumber", color: "green" },
  { name: "Persimmon", color: "orange" },
  { name: "Pumpkin", color: "orange" }
]



for(let name of fruits){
  $("#basket").append(`<div class="${name.color}">${name.name} </div>`).css("background-color" , `"${name.color}"`)
}

   const myInput = function () {
    const printInfo = $(".item").data().instock
    if(printInfo === true)
    {
      let adding = `<div class=cart-item>${$(this).text()}</div>`
      $("#cart").append(adding)

    }
  }
    
  $(".item").click(myInput)
 
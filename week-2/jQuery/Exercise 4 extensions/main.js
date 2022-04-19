
let indexShoe = 1
let indexMelon = 1
   const myInput = function () {
    $(".cart-item").empty()
    const printInfo = $(".item").data().instock
    
    if(printInfo === true && `${$(this).text()}`==="Shoe")
    {
      let adding = `<div class=cart-item>${$(this).text()} x${indexShoe}</div>`
      $("#cart").append(adding)
    }

    else
    {
      if(printInfo === true && `${$(this).text()}`==="Melon")
      {
        let adding = `<div class=cart-item>${$(this).text()} x${indexMelon}</div>`
        $("#cart").append(adding)
      }
    }
  }
    
  $(".item").click(myInput)

  $("#cart").on("click" ,".cart-item", function(){
    $(this).remove()
  })
 
  $(".item").on("click" , function(){
    if(`${$(this).text()}` === "Shoe")
    {
      indexShoe++
  

    }
    else if(`${$(this).text()}` === "Melon")
    {
      indexMelon++
    }
  })


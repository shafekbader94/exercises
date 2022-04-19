

   const myInput = function () {
    const printInfo = $(".item").data().instock
    if(printInfo === true)
    {
      let adding = `<div class=cart-item>${$(this).text()}</div>`
      $("#cart").append(adding)

    }
  }
    
  $(".item").click(myInput)
 
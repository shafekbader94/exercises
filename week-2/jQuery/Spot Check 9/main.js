
  const myInput = function () {
    console.log($("#my-input").val())
  }
  
  $("button").click(myInput)


  $(".feedme").on("click", function(){
    let divCopy =  `<div class=feedme>${$(this).text()}</div>`//use template literals and $(this)
    $("body").append(divCopy)
  })
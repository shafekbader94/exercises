
  const myInput = function () {
  
    let adding = `<li > ${$("#my-input").val()} </li>`
    $(".ulClass").append(adding)
    $('#my-input').val("")

  }
  
  $("button").click(myInput)

  $(".ulClass").on("click" ,"li", function(){
    $(this).remove()
  })
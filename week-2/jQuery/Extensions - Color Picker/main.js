

  $("#colors").on("click" ,"span", function(){
    const colorInfo = $(this).data().color
    $(".box").css("background-color" ,`${colorInfo}`)

  })

  $( "span" ).each(function( index ) {
    const colorInfo = $(this).data().color
    $(this).css("background-color" ,`${colorInfo}`)
    $(this).css("padding" ,"25px")
    $(this).css("border-radius" ,"30px")
  
  });
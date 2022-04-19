
  const someText = function () {
    $("#blogs").append("<div class='blog'>Some text</div>")
  }
  
  $("button").click(someText)

  
  $("#blogs").on("click", function(){
    $(".blog").text("blargh") 
  })
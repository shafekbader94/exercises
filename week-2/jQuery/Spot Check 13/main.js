
  const someText = function () {
    $("#blogs").append("<div class='blog'>Some text</div>")
  }
  
  $("button").click(someText)

  
  $("#blogs").on("click",".blog", function(){
    $(".blog").text("blargh") 
  })
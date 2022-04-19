$("body").append("<div class=box></div>");
$("body").append("<div class=box></div>");

  const changeColor = function () {
   $(this).css("background-color" , "blue")
  }
  $("div").hover(changeColor)



  const changeColorOut = function () {
    $(this).css("background-color" , "purple")
   }
   $("div"). mouseleave(changeColorOut)
 
 

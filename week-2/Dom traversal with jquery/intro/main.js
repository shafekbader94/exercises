$(".remove").on("click", function(){
  alert($(this).closest(".post").data().id)
})
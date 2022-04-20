$('button').on('click', function() {
  let relevantInputValue = $(this).closest("div").find("input").val()
  alert(relevantInputValue)
})
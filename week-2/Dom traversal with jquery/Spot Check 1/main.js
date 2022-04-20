$('button').on('click', function() {
  let relevantInputValue = $(this).closest("div").find("span").text()
  console.log(relevantInputValue)
})
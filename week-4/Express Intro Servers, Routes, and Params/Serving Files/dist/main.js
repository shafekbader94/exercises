$("button").on("click" , function(){
    const input = $("#input").val()

    $.get(`team/${input}`, function (data) {
        $("body").append(`<div id="">${data}</div>`)
    })
  })
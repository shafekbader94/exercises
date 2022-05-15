const renderer = Renderer();

$("button").on("click", function () {
  const input = $("#input").val();

  $.ajax({
    method: "GET",
    url: `team/${input}`,
    success: (data) => {
      renderer.render(data);
    },
    error: (xhr, text, error) => {
      console.log(text);
    },
  });
});


/*$.get("/dreamTeam", function (data) {
  renderer.render(data);
})*/



const getDreamTeam = function(){
  $.get("/dreamTeam", function (data) {
    renderer.render2(data);
  })
  
}

$(".player-container").on("click",".players", function () {
  const name = $(this).closest(".container").text().split(" ");
  const data = { firstName: name[9], lastName: name[10] };
  $.post('/addPlayer',  data, function (data) {
   // renderer.render2(data);
   getDreamTeam()

  
})
});


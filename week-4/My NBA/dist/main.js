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

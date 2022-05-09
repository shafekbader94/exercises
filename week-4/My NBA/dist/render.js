const Renderer = () => {
  const render = (data) => {
    $(".player-container").empty();
    const aboutPlayer = $("#aboutPlayer-template").html();
    const aboutPlayerTemplate = Handlebars.compile(aboutPlayer);
    let aboutPlayerNewHTML = aboutPlayerTemplate({ players: data });
    $(".player-container").append(aboutPlayerNewHTML);
  };
  return {
    render,
  };
};

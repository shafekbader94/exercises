const Renderer = () => {
  const render = (data) => {
    $(".player-container").empty();
    const aboutPlayer = $("#aboutPlayer-template").html();
    const aboutPlayerTemplate = Handlebars.compile(aboutPlayer);
    let aboutPlayerNewHTML = aboutPlayerTemplate({ players: data });
    $(".player-container").append(aboutPlayerNewHTML);
  };


  const render2 = (data) => {

    $(".player-container2").empty();
    const aboutPlayer2 = $("#aboutPlayer-template2").html();
    const aboutPlayerTemplate2 = Handlebars.compile(aboutPlayer2);
    let aboutPlayerNewHTML2 = aboutPlayerTemplate2({ players: data });
    $(".player-container2").append(aboutPlayerNewHTML2);
  };

  return {
    render,
    render2,
  };
};

const express = require("express");
const path = require("path");
const urllib = require("urllib");
const app = express();

const port = 3000;

const teamToIDs = {
  lakers: "1610612747",
  warriors: "1610612744",
  heat: "1610612748",
  suns: "1610612756",
};

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get("/team/:teamName", function (request, response) {
  let theTeam = request.params.teamName;

  urllib.request(
    "http://data.nba.net/10s/prod/v1/2018/players.json",
    function (err, data, res) {
      if (err) {
        throw err; // you need to handle error
      }

      const players = JSON.parse(data.toString()).league.standard;

      const filterPlayer = players
        .filter((p) => {
          if (p.teams.length > 0) {
            return (
              p.isActive == true &&
              p.teams[p.teams.length - 1].teamId === teamToIDs[theTeam]
            );
          } else return false;
        })
        .map((p) => {
          return {
            firstName: p.firstName,
            lastName: p.lastName,
            jersey: p.jersey,
            pos: p.pos,
          };
        });

      response.send(filterPlayer);
    }
  );
});

app.get("/", function (request, response) {
  response.send("Server is up and running smoothly");
});

app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});

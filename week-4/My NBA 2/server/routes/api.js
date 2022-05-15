const express = require('express')
const urllib = require("urllib");
const router = express.Router()

const teamToIDs = {
    lakers: "1610612747",
    warriors: "1610612744",
    heat: "1610612748",
    suns: "1610612756",
  };

let dreamTeam = []
let filterPlayer = []
router.get("/team/:teamName", function (request, response) {
    let theTeam = request.params.teamName;
  
    urllib.request(
      "http://data.nba.net/10s/prod/v1/2018/players.json",
      function (err, data, res) {
        if (err) {
          throw err; // you need to handle error
        }
  
        const players = JSON.parse(data.toString()).league.standard;
  
        filterPlayer = players
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
  

  router.put('/team', function (req, res) {
    const team = req.params
    teamToIDs[team.teamName] = team.teamId
   
    res.send(teamToIDs)
})

router.get("/dreamTeam", function (request, response) {
  response.send(dreamTeam);
});


router.post('/addPlayer', function (request, response) {
  const player = request.body
  //console.log(player.firstName)
  if(dreamTeam.length < 5){
    const playerInfo = filterPlayer.find((p) =>  player.firstName === p.firstName) //&& player.lastName === p.lastName)
   /* playerInfo.find((l) => {
      player.lastName === l.lastName //&& player.lastName === p.lastName)
      
      })*/
      const playerNospace = player.lastName.replace(/\s+/g, '')
      //console.log(playerNospace)
     // console.log(playerInfo.lastName)
    
      if(playerInfo.lastName === playerNospace){
   // console.log(playerInfo)
    if(dreamTeam.includes(playerInfo))
    console.log("exists!")
      else
      dreamTeam.push(playerInfo)
      }
  }
 // console.log(filterPlayer)
  console.log(dreamTeam)
    
  response.end()//send(dreamTeam)
})


  router.get("/", function (request, response) {
    response.send("Server is up and running smoothly");
  });

  module.exports = router
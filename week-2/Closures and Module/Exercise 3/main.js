
const SongsManager  = function () {

    const songs = {
 
      }

      const _utube = "https://www.youtube.com/watch?v="

    const addSong   = function (name , url) {
        songs[name] = url.split("").splice(32).join("")
        console.log(songs)

    }

    const getSong    = function (name) {
        console.log(_utube+songs[name])

    }

    return {
        addSong: addSong,
        getSong: getSong
  
    }
}



const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
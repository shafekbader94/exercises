const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}


const checkReservations =function(){

  const name = document.getElementById("name");
  let getName = name.value

 if(getName === Object.keys(reservations)[0] || getName === Object.keys(reservations)[1]){
    console.log(getName)
    if(reservations[getName].claimed === false){
      console.log("welcome "+ getName)

    }
    else{
      console.log("hmm someone already claimed")
    }
 }
  else
    console.log("You have no reservation")
}


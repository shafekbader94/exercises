let compterData ={

}

$('.generator').on('click', function() {
  let processID = $(this).closest(".processor").attr("id")
  let compData = $(this).closest(".computer").data().id
  let BusNumber = $(this).closest(".computer").find(".BUS").text()
  compterData["cmp_id"]=compData
  console.log("Processor ID: " + processID )
  console.log("Computer’s data-id: " + compData )
  console.log("BUS: " + processID )


})


$('.validator').on('click', function() {
  let genratorText = $(this).closest(".computer").find(".generator").text()
  let MBNumber = $(this).closest(".computer").find(".MB").text()
  let QRNumber = $(this).closest(".computer").find(".QR").toArray()//.text()

  console.log("Processor ID :" + genratorText )
  console.log("Computer’s data-id:" + MBNumber )
  for(let i=0; i<QRNumber.length; i++){
    console.log("QR :" + $(QRNumber[i]).text() )
  }

})
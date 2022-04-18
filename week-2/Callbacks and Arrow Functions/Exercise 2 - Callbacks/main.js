

const time = new Date()

const returnTime = function (time) {
  alert('The current time is: ' + time)
}


const getTime = (parm) => {
  return parm(time)
}


getTime(returnTime)


const logData = (data) => {
  console.log(data)
}


const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(alert, logData, "I like to party")



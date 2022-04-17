let formName = document.getElementById("form");

const validate = function () {
  let nameInput = document.getElementById("name").value;
  let salaryInput = document.getElementById("salary").value;
  let birthdayInput = document.getElementById("birthday").value;
  let phoneInput = document.getElementById("phone").value;

  if (nameInput === "") {
    const nameEmpty = document.createElement("div");
    nameEmpty.setAttribute("class", "nameEmpty");
    nameEmpty.style.color = "#dc3604";
    nameEmpty.innerHTML = "empty name";
    formName.appendChild(nameEmpty);
  } 

  else if (nameInput.length <= 2) 
  {
    const nameLess = document.createElement("div");
    nameLess.setAttribute("class", "nameLess");
    nameLess.style.color = "#dc3604";
    nameLess.innerHTML = "name mst be more than 2 characters";
    formName.appendChild(nameLess);
  }

  if (salaryInput < 10000 || salaryInput > 16000) 
  {
    const salaryCheck = document.createElement("div");
    salaryCheck.setAttribute("class", "salaryCheck");
    salaryCheck.style.color = "#dc3604";
    salaryCheck.innerHTML = "salary must be between 10000 and 16000";
    formName.appendChild(salaryCheck);
  }

  if (birthdayInput == null)
   {
    const birthdayCheck = document.createElement("div");
    birthdayCheck.setAttribute("class", "birthdayCheck");
    birthdayCheck.style.color = "#dc3604";
    birthdayCheck.innerHTML = "date is not found";
    formName.appendChild(birthdayCheck);
  }

  if (phoneInput.length != 10) 
  {
    const phoneCheck = document.createElement("div");
    phoneCheck.setAttribute("class", "phoneCheck");
    phoneCheck.style.color = "#dc3604";
    phoneCheck.innerHTML = "phone number must be 10 digits";
    formName.appendChild(phoneCheck);
  }

  else{
    const allGood = document.getElementById("form");
    allGood.style.display = "none"
    alert("welcome " + nameInput)

   
  }
};

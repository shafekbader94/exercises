let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018


let checkYears
let upgrading
let satisfied 
let moveUSA
let buyTesla

if (boughtTesla== true && isUSCitizen==true)
{
    checkYears = currentYear - yearOfTeslaPurchase //check how long ago the customer bought their Tesla
    console.log(checkYears)

    if (checkYears >= 4)
    {
     upgrading = prompt("Do you want to upgrade?")
     console.log(upgrading)

    }

    else
    {
     satisfied = prompt("Are you satisfied?")
     console.log(satisfied)
    }
}

else if(boughtTesla== true && isUSCitizen==false)
{
    moveUSA = prompt("Do you want to move to USA?")
    console.log(moveUSA)
}

else
{
    buyTesla = prompt("Do you want to buy a Tesla?")
    console.log(buyTesla)
}



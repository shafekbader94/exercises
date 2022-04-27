// Functions
localStorage.setItem('name', 'Shoobert');

// Object
localStorage.name = 'Shoobert';

// Object
localStorage['name'] = 'Shoobert';


localStorage.getItem('name')
//'Shoobert'


//Removing
localStorage.removeItem('name') 


//We can also go ham and clear the whole thing:
localStorage.clear()



/*************** */
let data = JSON.parse(localStorage.dataThatIsImportant || "[]")

data.forEach(d => /*something with data*/)
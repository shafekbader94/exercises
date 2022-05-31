

function add(a, b){
    return a && b ? a+b : function(c){return a+c;}
   }


console.log(add(2,5))

console.log(add(2)(5))
var integers= [ 13,12,3,15,6,17,9]; 
var some=0; 

var moyenne=0; 
function resultat(masome){
some=some+masome; 

}

integers.map(resultat); 
var a=  Math.round(some/integers.length,2); 
console.log(some)
console.log("la moyenne est "+ (a)); 

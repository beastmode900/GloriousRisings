//console.log('Hello World!')
//var topBTN = document.getElementsByClassName("topBTN");
//topBTN.addEventListener("mouseover",  )
var secret1Found = 0;
document.addEventListener('DOMContentLoaded', function() {
var secretCounter = 0;
const secret1 = document.getElementById("secret1");
secret1.addEventListener("click", function(){
    secret1Found = isFound(secret1Found);
    if(secret1.className === "hidden"){
        secret1.className = "";
        secret1.innerHTML = "secret 1 :D <br> <small><i> you've found " + secretCounter + " secret(s)</i></small>"
    }else{
        secret1.className = "hidden";
    }
});


function reveal(){
    secret1Found = isFound(secret1Found);
    if(secret1.className === "hidden"){
        secret1.className = "";
        secret1.innerHTML = secret1.innerHTML + " <br> <small> " + secretCounter + " </small>"
    }else{
        secret1.className = "hidden";
    }

} 

function isFound(secret){
    if(secret === 0){
        secretCounter++;
        return 1;
    }
    return 1;
}


});
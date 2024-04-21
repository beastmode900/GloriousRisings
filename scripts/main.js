let secretSrc = '../sounds/kh1fanfare.wav';
let secretAudio = new Audio(secretSrc);
let laughSrc = '../sounds/chipmunklaugh.mp3';
let laughAudio = new Audio(laughSrc);
var secret1Found = 0;
document.addEventListener('DOMContentLoaded', function() {
var secretCounter = 0;
const secret1 = document.getElementById("secret1");
secret1.addEventListener("click", function(){
    secret1Found = isFound(secret1Found);
    if(secret1.className === "hidden"){
        secret1.className = "";
        secretAudio.play();
        secret1.innerHTML = "secret 1 :D <br> <small><i> you've found " + secretCounter + " secret(s)</i></small>"
    }else{
        secret1.className = "hidden";
    }
});

function bugger(){
    homeBTN.innerHTML = '<i>you cheeky bugger you</i>';  
}

const homeBTN =  document.getElementById("homeBTN");
homeBTN.addEventListener("click", function(){
    laughAudio.play();
    homeBTN.innerHTML = '<i>you cheeky bugger you</i>';   
    setTimeout(() => {
        homeBTN.innerHTML = 'home';
    }, 3000);
    
    
});



function reveal(){
    secret1Found = isFound(secret1Found);
    if(secret1.className === "hidden"){
        secret1.className = "";
        audio.play();
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

function playSound(src) {
    const audio = new Audio(src);
    audio.play();
}


});
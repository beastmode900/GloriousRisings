let secretSrc = '../sounds/kh1fanfare.wav';
let secretAudio = new Audio(secretSrc);
let laughSrc = '../sounds/chipmunklaugh.mp3';
let laughAudio = new Audio(laughSrc);
var clickSecretFound = 0;
let homeSecretFound = 0;
var secretCounter = 0;
let secretCounterHTML = document.getElementById('secretCounter')
let typingSecretFound = 0;
let typingSol = 'secret';
let userTyped = '';
let starSecretFound = 0;
let starAudio = new Audio('../sounds/khItemGet.mp3');
const starSecret = document.getElementById('stars');








document.addEventListener('DOMContentLoaded', function() {

const secret1 = document.getElementById("secret1");
secret1.addEventListener("click", function(){
    clickSecretFound = isFound(clickSecretFound);
    if(secret1.className === "hidden"){
        secret1.className = "";
        secretAudio.play();
      //  secret1.innerHTML = "secret 1 :D <br> <small><i> you've found " + secretCounter + " secret(s)</i></small>"
    }else{
        secret1.className = "hidden";
    }
});

starSecret.addEventListener("click", function(){
    starSecretFound = isFound(starSecretFound);
    starAudio.play();
});

const homeBTN =  document.getElementById("homeBTN");
homeBTN.addEventListener("click", function(){
    laughAudio.play();
    homeSecretFound = isFound(homeSecretFound);
    homeBTN.innerHTML = '<i>you cheeky bugger you</i>';   
    setTimeout(() => {
        homeBTN.innerHTML = 'home';
    }, 3000);
    
    
});


/*
function reveal(){
    clickSecretFound = isFound(clickSecretFound);
    if(secret1.className === "hidden"){
        secret1.className = "";
        audio.play();
      //  secret1.innerHTML = secret1.innerHTML + " <br> <small> " + secretCounter + " </small>"
    }else{
        secret1.className = "hidden";
    }

} */

function isFound(secret){
    if(secret === 0){
        secretCounter++;
        secretCounterHTML.innerHTML = 'secrets found: ' + secretCounter + "/5"
        return 1;
    }
    return 1;
}

/*function playSound(src) {
    const audio = new Audio(src);
    audio.play();
} */

//when user types 'secret' the fanfare is played and 
//secretCounter is incremented
window.addEventListener("keypress", function(event){
    userTyped = userTyped + event.key;
    if(userTyped.charAt(userTyped.length-1) != typingSol.charAt(userTyped.length-1)){
      userTyped = '';
        return;   
    }
    if(userTyped === 'secret'){
        typingSecretFound = isFound(typingSecretFound);
        secretAudio.play();
        userTyped = '';
        return;
    }
    
});


});
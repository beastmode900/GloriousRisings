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


const homeBTN =  document.getElementById("homeBTN");
homeBTN.addEventListener("click", function(){
    laughAudio.play();
    homeSecretFound = isFound(homeSecretFound);
    homeBTN.innerHTML = '<i>you cheeky bugger you</i>';   
    setTimeout(() => {
        homeBTN.innerHTML = 'home';
    }, 3000);
    
    
});



function reveal(){
    clickSecretFound = isFound(clickSecretFound);
    if(secret1.className === "hidden"){
        secret1.className = "";
        audio.play();
      //  secret1.innerHTML = secret1.innerHTML + " <br> <small> " + secretCounter + " </small>"
    }else{
        secret1.className = "hidden";
    }

} 

function isFound(secret){
    if(secret === 0){
        secretCounter++;
        secretCounterHTML.innerHTML = 'secrets found: ' + secretCounter + "/5"
        return 1;
    }
    return 1;
}

function playSound(src) {
    const audio = new Audio(src);
    audio.play();
}

window.addEventListener("keydown", function(event){
    userTyped = userTyped + event.key;
    if(userTyped.charAt(userTyped.length-1) != typingSol.charAt(userTyped.length-1)){
      userTyped = '';
        return;   
    }
    if(userTyped === 'secret'){
        typingSecretFound = isFound(typingSecretFound);
        secretAudio.play();
        return;
    }
    
});


});
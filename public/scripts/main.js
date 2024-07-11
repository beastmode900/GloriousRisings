let secretSrc = 'sounds/kh1fanfare.wav';
let secretAudio = new Audio(secretSrc);
secretAudio.volume = .3;
let laughSrc = 'sounds/chipmunklaugh.mp3';
let laughAudio = new Audio(laughSrc);
laughAudio.volume = .3;
var clickSecretFound = 0;
let homeSecretFound = 0;
let rClickSecretFound = 0;
var secretCounter = 0;
let secretCounterHTML = document.getElementById('secretCounter')
let typingSecretFound = 0;
let typingSol = 'secret';
let userTyped = '';
let starSecretFound = 0;
let starAudio = new Audio('sounds/khItemGet.mp3');
starAudio.volume = .3;
const starSecret = document.getElementById('stars');
const grottoMSG = document.getElementById("grottoMSG");
const grotto = document.getElementById('grotto');
let musicAudio = new Audio('sounds/musicForAirports.mp3');



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


//makes sure secret counter isn't incremented for rediscovering a secret
//also checks if grotto should be available
function isFound(secret){
    if(secret === 0){
        secretCounter++;
        secretCounterHTML.innerHTML = 'secrets found: ' + secretCounter + "/5"
        if(secretCounter === 5){
            grotto.className = '';
            grottoMSG.className = '';
        }
        return 1;
    }
    return 1;
}


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

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        rClickSecret.className = "";
        rClickSecret = document.getElementById("rClickSecret");
        rClickSecret.addEventListener("click", function(){
            secretAudio.play();
            rClickSecretFound = isFound(rClickSecretFound);
        });



      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("You've tried to open context menu");
      window.event.returnValue = false;
    });
  }



   musicAudio.volume = 0.2;
   musicAudio.loop;
   musicAudio.play();

});



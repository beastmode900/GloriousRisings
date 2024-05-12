const songs = ["DECEMBER STARS COULD NEVER MATCH YOUR EYES", "LIFE GOES ON", "EMONE" ];
const artists = ["Die, Emperor! Die!", "LWL", "LWL"];
let points = 0;
let  currentRound = 1;
let answer = "";
let running = true;



function getValue(event){
    if(event.keyCode == 13 ){
        let x = document.getElementById("myInput");
        answer = x.value;
        checkAnswer(); 
    }

}


function checkAnswer(){
answer = answer.toUpperCase();
if(answer == songs[currentRound]){
    points += 1;
}


}









const songs = ["DECEMBER STARS COULD NEVER MATCH YOUR EYES", "LIFE GOES ON", "EMONE" ];
const artists = ["Die, Emperor! Die!", "LWL", "LWL"];
let points = 0;
let  currentRound = 0;
let answer = "";
let running = true;
let pointCounter = document.getElementById('pointCounter');
let currentSong = document.getElementById('theSong');
let srcArray = ['./songs/02_DecemberStarsCouldNeverMatchYourEyes.mp3', "./songs/LWL - Life Goes On.mp3", "./songs/LWL - Emone.mp3"];
let srcArrayFinal = [];
let songsLength = songs.length;
let playlist = [];
playlist = generatePlaylist();
currentSong.setAttribute('src', srcArrayFinal[currentRound][0]);




function getValue(event){
    if(event.keyCode == 13 ){
        let x = document.getElementById("myInput");
        answer = x.value;
        x.value = '';
        answer = answer.trim();
        checkAnswer(); 
    }

}


function checkAnswer(){
answer = answer.toUpperCase();
if(currentRound >= playlist.length-1){
    pointCounter.innerHTML = 'game over biaaatch'
    return;
}
if(answer == playlist[currentRound][0]){
    points += 1;
    pointCounter.innerHTML = 'current points: ' + points;
    currentRound++;
}else{
    currentRound++;
}
currentSong.setAttribute('src', srcArrayFinal[currentRound][0]);


}



function generatePlaylist(){
        for( var i = 0; i<songsLength; i++){
            randomVal = Math.floor(Math.random() * songs.length);
            removed = songs.splice(randomVal,1);
            srcRemoved = srcArray.splice(randomVal,1);
            playlist.push(removed);
            srcArrayFinal.push(srcRemoved);
           // console.log("value = " + rndVal + " Array = " + songs + " removed = " + removed);
        }
    return playlist;
}









const songs = ["LIFE GOES ON", "EMONE", "BLISTER" ];
const artistsToRandomize = ["LWL", "LWL", "FRAIL"];
const artists = [];
let points = 0;
let currentRound = 0;
let answer = "";
let running = true;
let pointCounter = document.getElementById('pointCounter');
let currentSong = document.getElementById('theSong');
let srcArray = ["./songs/LWL - Life Goes On.mp3", "./songs/LWL - Emone.mp3", "./songs/Blister.mp3"];
let srcArrayFinal = [];
let songsLength = songs.length;
let playlist = [];
playlist = generatePlaylist();
currentSong.setAttribute('src', srcArrayFinal[currentRound][0]);
let songAnswered = false;
let artistAnswered = false;
let songsInARow = 1;
let artistsInARow = 1;
let comboDisplay = document.getElementById("comboDisplay");


//add streak bonus maybe max it out at 10 tho 
//for the artist name guessing give that a multiplication streak 
//so you can get insane scores, prob cap at like 5 



function getSongValue(event){
    if(event.keyCode == 13 ){
        let x = document.getElementById("songInput");
        answer = x.value;
        x.value = '';
        answer = answer.trim();
        x.setAttribute("disabled", true);
        checkSongAnswer();
         
    }

}

function getArtistValue(event){
    if(event.keyCode == 13 ){
        let x = document.getElementById("artistInput");
        answer = x.value;
        x.value = '';
        answer = answer.trim();
        x.setAttribute("disabled", true);
        checkArtistAnswer();
         
    }

}


function checkSongAnswer(){
answer = answer.toUpperCase();

if(songAnswered === true){
    return;
}

if(answer == playlist[currentRound][0]){
    points += songsInARow * artistsInARow;
    pointCounter.innerHTML = 'current points: ' + points;
    songsInARow++;
    comboDisplay.innerHTML = "current combo: " + songsInARow + " x " + artistsInARow;
}
else{
    songsInARow = 1;
    comboDisplay.innerHTML = "current combo: " + songsInARow + " x " + artistsInARow;

}

songAnswered = true;
moveRoundForward();


}

function checkArtistAnswer(){
    answer = answer.toUpperCase();
    
    if(artistAnswered === true){
        return;
    }
    
    if(answer == artists[currentRound][0]){
        points += songsInARow * artistsInARow;
        pointCounter.innerHTML = 'current points: ' + points;
        artistsInARow++;
        comboDisplay.innerHTML = "current combo: " + songsInARow + " x " + artistsInARow;
}
else{
    artistsInARow = 1;
    comboDisplay.innerHTML = "current combo: " + songsInARow + " x " + artistsInARow;

}

    
    artistAnswered = true;
    moveRoundForward();
    
    
    }

function moveRoundForward(){
    
    if(currentRound >= playlist.length-1 && points < 1 && songAnswered === true && artistAnswered === true){
        let gameEnd = document.getElementById('gameEnd');
        gameEnd.innerHTML = 'game over biaaatch';
        let scoreMessage = document.getElementById('scoreMessage');
        let nameInput = document.getElementById('nameInput');
        scoreMessage.removeAttribute("hidden");
        nameInput.removeAttribute("hidden");
        return;
    }
    
    if(currentRound >= playlist.length-1 && points >= 3 && songAnswered === true && artistAnswered === true){
        gameEnd.innerHTML = 'damn bruh.. ur a beast';
        let scoreMessage = document.getElementById('scoreMessage');
        let nameInput = document.getElementById('nameInput');
        scoreMessage.removeAttribute("hidden");
        nameInput.removeAttribute("hidden");
        return;
    }
    
    if(currentRound >= playlist.length-1 && songAnswered === true && artistAnswered === true ){
        scoreMessage.removeAttribute("hidden");
        nameInput.removeAttribute("hidden");
        return;
    }

    if(songAnswered === true && artistAnswered === true){
        currentRound++;
        currentSong.setAttribute('src', srcArrayFinal[currentRound][0]);
        songAnswered = false;
        artistAnswered = false;
        let x = document.getElementById("songInput");
        x.removeAttribute("disabled");
        x = document.getElementById("artistInput");
        x.removeAttribute("disabled");
    }

}



function generatePlaylist(){
        for( var i = 0; i<songsLength; i++){
            let randomVal = Math.floor(Math.random() * songs.length);
            let removed = songs.splice(randomVal,1);
            let srcRemoved = srcArray.splice(randomVal,1);
            let artistRemoved = artistsToRandomize.splice(randomVal,1);
            playlist.push(removed);
            srcArrayFinal.push(srcRemoved);
            artists.push(artistRemoved);
           // console.log("value = " + rndVal + " Array = " + songs + " removed = " + removed);
        }
    return playlist;
}


function addScoreToDataBase(event){
    if(event.keyCode == 13 ){
        let x = document.getElementById("nameInput");
        let userName = x.value;
        x.value = '';
        userName = userName.trim();
        writeUserData(userName);
    }
}

function writeUserData(userName){

}



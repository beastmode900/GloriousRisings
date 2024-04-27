const cells = document.querySelectorAll(".cells");
const turnText = document.querySelector("#turnText");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = [
    ["", "", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "", "",],
];
let player = "player 1";
let running = true;

document.addEventListener('DOMContentLoaded', function() {

cells.forEach(cell => cell.addEventListener("click", clicked));
turnText.textContent = `${player}'s turn`;
    
    
function checkWin(){
    let win = false;
    for(let i = 0; i < winConditions.length; i++){
        const dubNation = winConditions[i];
        const cell1 = options[dubNation[0]];
        const cell2 = options[dubNation[1]];
        const cell3 = options[dubNation[2]];

        if(cell1 == "" || cell2 == "" || cell3 == ""){
            continue;
        }
        if(cell1 == cell2 && cell2 == cell3){
            win = true;
            break;
        }
    }
  

    if(win){
        turnText.textContent = `${player} dubbed out`;
        running = false;
    }
    else if(!options.includes('')){
        turnText.textContent = 'draw...';
        running = false;
    }
    else{
        changePlayer();
    }

}

function clicked(){
    const cellIndex = this.getAttribute("Cellindex");

    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWin();

}

function updateCell(cell, index){
    if(player == "player 1"){
        options[index] = 'X';
        cell.textContent = 'X';
    }
    else if(player == "player 2"){
        options[index] = 'O';
        cell.textContent = 'O';
    }
}

function changePlayer(){
    if(player == "player 1"){
        player = "player 2";
    }else{
        player = "player 1";
    }
    turnText.textContent = `${player}'s turn`;
}


});
let blogImages = document.querySelectorAll(".imgs");
let gallery = document.getElementById("wrapper");
let modalTextBlock = document.getElementById("modal-text");

//using onclick in html instead of event listener because event listener wasn't working for whatever reason
function enlargeImage(imageSrc){
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function enlargeArchiveImage(imageSrc, index){
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = imageSrc;
    modalTextBlock.innerText = textBlocks[index]; 
    //index is hard coded but its just 1 number so i figure the work needed to add that when adding new content is worth for the easy soltuion #Lol 
}


//text for archive images 

textBlocks = [

"Stacie Orrico - S/T, released in 2003 this is such a sweet pop album",
"Ostraca - Disaster",
"in wolves clothing - it eats itself",
"Knumears - A Shout to See"

]
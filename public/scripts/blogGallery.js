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
"Knumears - A Shout to See",
"The Cranberries - No Need to Argue",
"Chune - Burnt",
"Saves the Day - Ups & Downs: Early Recordings and B-sides",
"Hum - You'd Prefer an Astronaut",
"Cursive - Domestica",
"Kate Bush - Hounds of Love",
"Carly Rae Jepsen - The Loneliest Time",
"Joanna Newsom - Ys",
"Blink-182 - S/T",
"Jimmy Eat World - Static Prevails",
"Blink-182 - Take Off Your Pants and Jacket",
"Natalie Imbruglia - Left in the Middle",
"Rainer Maria - Look Now Look Again",
"The Get Up Kids - Four Minute Mile",
"The Get Up Kids - Something to Write Home About",
"allthepiecesgatheredbymay - demos",
"The Civil War in France - early discography",
"OLTH - every day is sOmeOne's speciaL day",
"Middle Earth - Demo 2023",
"Stumik Bug/Bottle Violence - stumikviolence",
"Lanemeyer - If Theres a Will, Theres Still Nothing",
"pageninetyine - document #5",
"Your Arms Are My Cocoon - S/T",
"herlovebeheadsdaisies - carving initials",
"In Loving Memory - As Years Pass And Feel Like Seconds",
"algernon cadwallader - S/T",
"Jejune - R.I.P.",

]
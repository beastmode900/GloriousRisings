var textBlocks = [
    {
        //1
        text: "test 1",
        date: "7/8/24",
        imgs: "",
        vids: "",
    },

    {
        //2
        text: "test 2",
        date: "7/8/24",
        imgs: "",
        vids: "",
    },

    {
        //3
        text: "test 3",
        date: "7/8/24",
        imgs: "",
        vids: "",
    },
]

const actions = {
    0: "<div class=\"imgs\" id=\"testImg1\"></div><div class=\"imgs\" id=\"testImg2\"></div><div class=\"imgs\" id=\"testImg3\"></div>",
    2: `<div class=\"imgs\" id=\"testImg4\"></div><div class=\"imgs\" id=\"testImg5\"></div><div class=\"imgs\" id=\"testImg6\"></div><br>` //<video controls class=\"vids\" id=\"testVid1\"> <source src="../images/first_waveshine_usmash.mp4" type="video/mp4"> </video>`
}


// Set the initial index to 0 (the first text block)
var index = 0;
var pageNum = 0;
// Get references to the HTML elements
var textBlockEl = document.getElementById("text-block");
var dateBlockEl = document.getElementById("date-block");
var vidBlockEl = document.getElementById("vid-block");
var backBtn = document.getElementById("back-btn");
var nextBtn = document.getElementById("next-btn");
//var endBtn = document.getElementById("end-btn");
var goBtn = document.getElementById("go-btn");
var searchBtn = document.getElementById("search-btn");
var pageNum = document.getElementById("page-num");
var imgBlock = document.getElementById("img-block");

dropdown.addEventListener("change", function(){
});
function updateSubject() {
  const code = actions[index];
  if (code == undefined){
    document.getElementById("subject").innerHTML = "";
  }
  else{
    subject.insertAdjacentHTML("afterbegin",code)
  }
  
}

function jump(){
  
    index = dropdown.value-1;
      textBlockEl.innerHTML = textBlocks[index].text;
      dateBlockEl.textContent = textBlocks[index].date;
      vidBlockEl.textContent = textBlocks[index].vids;
      pageNum.textContent = index+1 + " of " + textBlocks.length;
      imgBlock.id = textBlocks[index].imgs;
     
      
    }


// Function to update the text block with the current index

function updateTextBlock() {
  
  pageNum.textContent = index+1 + " of " + textBlocks.length;
  textBlockEl.innerHTML = textBlocks[index].text;
  dateBlockEl.textContent = textBlocks[index].date;
  vidBlockEl.textContent = textBlocks[index].vids;
  imgBlock.id  = textBlocks[index].imgs;
 
  
}

// Add event listeners to the back and next buttons
backBtn.addEventListener("click", function() {
  if (index > 0) {
    index--;
    document.getElementById("subject").innerHTML = "";
    updateTextBlock();
    updateSubject();
  }
});

nextBtn.addEventListener("click", function() {
  if (index < textBlocks.length - 1) {
    index++;
    document.getElementById("subject").innerHTML = "";
    updateTextBlock();
    updateSubject();
  }
});

goBtn.addEventListener("click", function(){
    document.getElementById("subject").innerHTML = "";
    jump();
    updateSubject();
});

// endBtn.addEventListener("click", function() {
//     index=0;
//     document.getElementById("subject").innerHTML = "";
//     updateTextBlock();
//     updateSubject();
// });
searchBtn.addEventListener("click", function() {
  document.getElementById("subject").innerHTML = "";
    jump();
    updateSubject();
});





// Call the updateTextBlock function to set the initial text

updateTextBlock();
updateSubject();
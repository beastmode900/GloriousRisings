/*


!!!!!!!!!!!!!!!!!!!!!! MOST OF THIS CODE WAS WRITTEN BY  
"beyondthecraig" ON INSTAGRAM I CHANGED IT A LITTLE TO FIT 
MY NEEDS BUT CREDIT IS STILL THERES FOR THIS SCRIPT !!!!!!!!!!!!!!!!!!!!!


*/




var textBlocks = [
    {
        //1
        text: "the first post on my website! thank you for visiting :)",
        date: "7/10/24",
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

    {
        //4
        text: "merppp nothing here yet",
        date: "7/10/24",
        imgs: "",
        vids: "",
    }
]

// HTML for images and videos to be inserted in the corresponding blog post
const actions = {
    0: "<div class=\"imgs\" id=\"bgimg1\"></div><div class=\"imgs\" id=\"bgimg2\"></div><div class=\"imgs\" id=\"bgimg3\"></div>",
    2: `<div class=\"imgs\" id=\"testImg4\"></div><div class=\"imgs\" id=\"testImg5\"></div><div class=\"imgs\" id=\"testImg6\"></div><br>        <video class="vids" controls="controls" loop>
            <source src="images/7cClear.mp4">
        </video>`, 
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
var input = document.getElementById("dropdown");

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
  input.setAttribute("placeholder", "go to blog posts 1-" + textBlocks.length)
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
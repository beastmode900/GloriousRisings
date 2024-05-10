//const { or } = require("firebase/firestore");

var staticGifSuffix = "_static.jpg";
var gifSuffix = ".gif";
const toAnimate = document.querySelectorAll(".animateOnHover");
var counter = 0;

document.addEventListener('DOMContentLoaded', function() {
  toAnimate.forEach(element => element.addEventListener('mouseover', animate));
  toAnimate.forEach(element => element.addEventListener('mouseleave', off));



    
    
    
    
    function animate(){
        var originalSrc = this.getAttribute('src');
        
       
       this.setAttribute('src', originalSrc.substring(0, 24) + gifSuffix); // 0, 24 substring b/c images/raingifs/raingifX is 25 chars 
       
       

    }
    function off()
    {
        var originalSrc = this.getAttribute('src');
        this.setAttribute('src', originalSrc.substring(0, 24) + staticGifSuffix); // 0, 24 substring b/c images/raingifs/raingifX is 25 chars
        
    }

 });
  


let blogImages = document.querySelectorAll(".imgs");
let gallery = document.getElementById("wrapper");

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
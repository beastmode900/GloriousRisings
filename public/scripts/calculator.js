var regExp = /[a-zA-Z]/g;

var sum = 0;

function display(value){
    if(regExp.test(document.getElementById('display').value)){
        deleteAll();
    }

    document.getElementById('display').value += value;
}

function result(){
    let expression = document.getElementById('display').value;
    
    try{
    document.getElementById('display').value = eval(expression);
    }
    catch{
        document.getElementById('display').value = 'SYNTAX ERROR'
    }  
}

function deleteOne(){
    let expression = document.getElementById('display').value;

    if(regExp.test(document.getElementById('display').value)){
        deleteAll();
    }else{
        document.getElementById('display').value = expression.slice(0,-1);
    }
}

function deleteAll(){
    document.getElementById('display').value = '';
}



function clickLogo(){
fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2000-01-01&enddate=2003-01-01&dateregion=tcg')

.then((result) => {
    if(result.ok){
        return result.json();
    }else{
        throw new Error('bad request');
    }
})
.then(data => {
    sum++
    let x = Math.floor(Math.random() * data.data.length);
    let imgURL = (data.data[x].card_images[0].image_url_cropped);
    let logo = document.getElementById('logo')
    deleteAll();
    if(sum === 10){
        sum = 0;
        logo.src = './newLogo.png'
    }else{
        logo.src = imgURL;
        display(data.data[x].name.toUpperCase())
    }
})
.catch((err) => {
    console.error(err);
});


}

const regExp2 = /[0-9+\-*/.]/
window.addEventListener('keydown', function(event){
    if(regExp2.test(event.key)){
        display(event.key);
    }
    else if(event.key === '=' || event.key === 'Enter'){
        result();
    }
    else if(event.key === 'Backspace' || event.key === 'Delete'){
        deleteOne();
    }
});



function alertCity(element){
    alert("Loading weather report...");

}

var cookieBar = document.querySelector(".cookieBar")

function acceptCookies(){
    cookieBar.remove()
}


var cold = document.querySelector("#coldOne")
var coldTwo = document.querySelector("#coldTwo")
var coldTree = document.querySelector("#coldTree")
var coldFour = document.querySelector("#coldFour")
var hot = document.querySelector("#hotOne")
var hotTwo = document.querySelector("#hotTwo")
var hotTree = document.querySelector("#hotTree")
var hotFour = document.querySelector("#hotFour")

function convert(){
    if(document.getElementById('selectid').value=='fahrenheit'){

    cold.innerText = '64°';
    coldTwo.innerText = '66°';
    coldTree.innerText = '61°';
    coldFour.innerText = '70°';
    hot.innerText = '75°';
    hotTwo.innerText = '81°';
    hotTree.innerText = '70°';
    hotFour.innerText = '79°';
}
else{
    cold.innerText = '18°';
    coldTwo.innerText = '19°';
    coldTree.innerText = '16°';
    coldFour.innerText = '21°';
    hot.innerText = '24°';
    hotTwo.innerText = '27°';
    hotTree.innerText = '21°';
    hotFour.innerText = '26°';


}

}



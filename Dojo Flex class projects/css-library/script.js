// Sticky notes 

function addShadows(element) {
    element.classList.add("shadow");
}
function removeShadow(element) {
    element.classList.remove("shadow");
}



// counter

var count = 1;
var countElement = document.querySelector("#plus")
function add1() {
    count++;
    countElement.innerText = "The count is " + count;

}
var count = 1;
var countElement = document.querySelector("#count")
function subtract1() {
    count--;
    countElement.innerText = "The count is " + count;

}
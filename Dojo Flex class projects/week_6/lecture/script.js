var nameSpan = document.querySelector("#name")
var foodToOrder = "Pizza";

function setNameOne(element){
    console.log(element.value)
    nameSpan.innerText = element.value

}

function pickFood(element){
    console.log("The food is " + element.value);
    foodToOrder = element.value;
    alert("Ordering a " + foodToOrder)
}

function order() {
    alert("Ordering a " + foodToOrder)

}
function chooseLunch(element) {
    alert("You picked " + element.value);
}
var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}
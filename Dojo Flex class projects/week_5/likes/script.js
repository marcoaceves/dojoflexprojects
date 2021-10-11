var countOne = [3,12,9];
var countElement = [
    document.querySelector(".likesOne"),
    document.querySelector(".likesTwo"),
    document.querySelector(".likesThree")
]

function add1(i) {

    countOne[i]++;
    countElement[i].innerText = countOne[i] + " like(s)";
}
// var countTwo = 12;
// var countElement2 = document.querySelector( ".likesTwo")
// function add2() {
//     countTwo++;
//     countElement2.innerText = countTwo + " like(s)";
// }
// var countThree = 9;
// var countElement3 = document.querySelector( ".likesThree")
// function add3() {
//     countThree++;
//     countElement3.innerText = countThree + " like(s)";
// }

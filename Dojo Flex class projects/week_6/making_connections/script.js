let accept = document.querySelector('.h1todd')
let count = document.querySelector('#span2')
let five = document.querySelector('#five')

var plus = 2
var con = 500
function yes() {
    accept.remove()
    plus--
    count.innerText = plus;
    con++
    five.innerText = con;
    

}

let deny = document.querySelector('.h1todd')
function no() {
    deny.remove()
    plus--
    count.innerText = plus;
}

let accept2 = document.querySelector('.phil')
function yes2() {
    accept2.remove()
    plus--
    count.innerText = plus;
    con++
    five.innerText = con;
}

let deny2 = document.querySelector('.phil')
function no2() {
    deny2.remove()
    plus--
    count.innerText = plus;
}

let name = document.querySelector('#marco')
function change() {
    
}
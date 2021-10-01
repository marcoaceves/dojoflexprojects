console.log("page loaded...");
var x = document.getElementById("myVideo");

function playVideo() {
x.play();
document.getElementById("myVideo").muted = true; 
}

function pauseVideo() {
x.pause();
} 
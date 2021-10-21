
// // //1. always hungry.... this was really dificult....

// function alwaysHungry(arr) { 
    
//     if(arr.includes("food")== false){ console.log("I'm Hungry")}

//     for( var i = 0; i < arr.length; i++){
//         if(arr[i] == "food"){
//         console.log("yummy");}
        
// }}

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"


// //2.High Pass Filter .... this was really easy 
// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (i=0; i < arr.length; i++){
//         if(arr[i] > 5){
//             filteredArr.push( arr[i])
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


// //3 Better than average

// function betterThanAverage(arr) {
//     var sum = 0;
//     var avg = 0;
//     // calculate the average
//     for (i=0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     avg = sum/arr.length
    
//     var count = 0
//     for (i=0; i < arr.length; i++){
//         if(arr[i]> avg){
//             count++
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4 


//4.Array Reverse
function reverse(arr) {
    
    for (i=0; i < arr.length; i++){
        
        var temp = arr[i] //a 
        arr[i] =  arr[4 - i] // e
        arr[4 - 1] = temp // a 
        
    
    } 
    

    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
// document.addEventListener('DOMContentLoaded', function(){
// TicTacToe game

// prompt at the end to say you won



// let playerTurn = 1
// const innerSquare = document.getElementsByTagName("td")

// function addSign() {
//   if (playerTurn == 1) {
//     innerSquare.addEventListener("click", function() {
//       innerSquare.innerHTML = "X";
//     });
//     playerTurn = 2;
//   }
//   else if (playerTurn == 2){
//   innerSquare.addEventListener("click", function() {
//     innerSquare.innerHTML = "O";
//   });
//     playerTurn = 1;
//   }
// }


document.addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

document.getElementById("innerSquare0").addEventListener("click", addSign0);
function addSign0() {
  document.getElementById("innerSquare0").innerHTML ="X";
}
document.getElementById("innerSquare1").addEventListener("click", addSign1);
function addSign1() {
  document.getElementById("innerSquare1").innerHTML ="X";
}
document.getElementById("innerSquare2").addEventListener("click", addSign2);
function addSign2() {
  document.getElementById("innerSquare2").innerHTML ="X";
}
document.getElementById("innerSquare3").addEventListener("click", addSign3);
function addSign3() {
  document.getElementById("innerSquare3").innerHTML ="X";
}
document.getElementById("innerSquare4").addEventListener("click", addSign4);
function addSign4() {
  document.getElementById("innerSquare4").innerHTML ="X";
}
document.getElementById("innerSquare5").addEventListener("click", addSign5);
function addSign5() {
  document.getElementById("innerSquare5").innerHTML ="X";
}
document.getElementById("innerSquare6").addEventListener("click", addSign6);
function addSign6() {
  document.getElementById("innerSquare6").innerHTML ="X";
}
document.getElementById("innerSquare7").addEventListener("click", addSign7);
function addSign7() {
  document.getElementById("innerSquare7").innerHTML ="X";
}
document.getElementById("innerSquare8").addEventListener("click", addSign8);
function addSign8() {
  document.getElementById("innerSquare8").innerHTML ="X";
}

// Win cons:

// const winCon = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 6],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ] ;

function checkWinner() {
  if (document.getElementById("innerSquare0") == "X" && document.getElementById("innerSquare1") == "X" && document.getElementById("innerSquare2") == "X") {alert("X has won!")}
  else if (document.getElementById("innerSquare3").innerHTML == "X" && document.getElementById("innerSquare4").innerHTML == "X" && document.getElementById("innerSquare5").innerHTML == "X") {alert("X has won!")}
  else if (document.getElementById("innerSquare6").innerHTML == "X" && document.getElementById("innerSquare7").innerHTML == "X" && document.getElementById("innerSquare8").innerHTML == "X") {alert("X has won!")}
  else if (document.getElementById("innerSquare0").innerHTML == "X" && document.getElementById("innerSquare3").innerHTML == "X" && document.getElementById("innerSquare6").innerHTML == "X") {alert("X has won!")}
  else if (document.getElementById("innerSquare1").innerHTML == "X" && document.getElementById("innerSquare4").innerHTML == "X" && document.getElementById("innerSquare6").innerHTML == "X") {alert("X has won!")}
  else if (document.getElementById("innerSquare2").innerHTML == "X" && document.getElementById("innerSquare5").innerHTML == "X" && document.getElementById("innerSquare8").innerHTML == "X") {alert("X has won!")}
  else if (document.getElementById("innerSquare0").innerHTML == "X" && document.getElementById("innerSquare4").innerHTML == "X" && document.getElementById("innerSquare8").innerHTML == "X") {alert("X has won!")}
  else if (document.getElementById("innerSquare2").innerHTML == "X" && document.getElementById("innerSquare4").innerHTML == "X" && document.getElementById("innerSquare6").innerHTML == "X") {alert("X has won!")}
}

// function grid() {
//   console.log(document.getElementsByClassName("innerSquare"))
// }
  
// })
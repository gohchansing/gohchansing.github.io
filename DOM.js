var box = document.querySelectorAll("td");
var button = document.querySelector("#restart");

function clear(){
  for (var i = 0; i < box.length; i++) {
    box[i].textContent="";
  }
}

button.addEventListener("click",clear);

var turn="X";
var win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function change(){
  if (turn==="X"&&this.textContent==="") {
    this.textContent="X";
    turn="O";
  }
  else if (turn==="O"&&this.textContent==="") {
    this.textContent="O";
    turn="X";
  };
  for (var i = 0; i < win.length; i++) {
    if (box[win[i][0]].textContent==="X"&&box[win[i][1]].textContent==="X"&&box[win[i][2]].textContent==="X") {
      alert("X has won this round!");
    }
    if (box[win[i][0]].textContent==="O"&&box[win[i][1]].textContent==="O"&&box[win[i][2]].textContent==="O") {
      alert("O has won this round!");
    }
  }
}

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('click',change);
}

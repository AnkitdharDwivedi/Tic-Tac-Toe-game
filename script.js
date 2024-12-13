
let zero=true;
let boxes=document.querySelectorAll(".cell");
boxes.forEach(box => {
    box.addEventListener("click", func1);
});
let resetBtn = document.querySelector("#restartButton");
let cont=document.querySelector(".game-board");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  let count=0;

function func1(event){
    if(zero){
    event.target.innerHTML="O";
    event.target.disabled=true;
    event.target.style.color = "white";  
    event.target.style.backgroundColor = "red";
    zero=false;

}
else{
    
    event.target.innerHTML="X";
    event.target.disabled=true;
    event.target.style.color = "white";  
    event.target.style.backgroundColor = "blue";
    zero=true;
}
count++;

    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
         matchdrew();
      }

}
let msg = document.querySelector(".win");

const matchdrew=()=>{
   
    msg.innerText="Match is Draw Restart New Game";
}

const resetGame = () => {
    cont.style.display="grid";
    zero = true;
    count = 0;
    msg.innerText="";
    enableBoxes();
    
  };
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
      box.style.backgroundColor="white";
    }
   
  };
  
const showWinner = (winner) => {
    
    msg.innerText = `Congratulations, Winner is ${winner}`;
    
   
    disableBoxes();
  };
const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };
  resetBtn.addEventListener("click", resetGame);
 


let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset_btn");
 let newGameBtn = document.querySelector("#new_btn");
 let msgContainer = document.querySelector(".msg-container");
 let msg = document.querySelector("#msg")

let turnO = true; //playerX, playerO

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
  box.addEventListener('click',()=> {
    console.log('Box was clicked');
    if(turnO){ //playerO
      box.innerText = "O";
      turnO = false;
    }else{//playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  })
}) 
const disableBoxes = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
}
const enableBoxes = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText ="";
  }
}

const showWinner = (winner) =>{
  msg.innerText = `Congratulations, Winner is ${winner}` 
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for(let pattern of winPatterns){
    // console.log(pattern[0],pattern[1],pattern[2]);
     let pos1val = boxes[pattern[0]].innerText;
     let pos2val = boxes[pattern[1]].innerText;
     let pos3val = boxes[pattern[2]].innerText;

     if(pos1val != "" && pos2val !="" && pos3val !=""){
       if(pos1val === pos2val && pos2val === pos3val){
        console.log("Winner",pos1val);
        showWinner(pos1val);
       }
     }
  }
}




const resetGame = () =>{
   turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
}



newGameBtn.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);
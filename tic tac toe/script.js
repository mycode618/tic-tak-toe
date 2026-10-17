let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContentener = document.querySelector(".msg-contentener")
let msg = document.querySelector("#msg")


let turnO = true;  //playerx,playerO

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

 const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContentener.classList.add("hide");

 }
    
 
 
 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerHTML = "O"; // playerO
            box.style.color = "blue";
            turnO = false;
    
        } else{
            box.innerHTML = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

    const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContentener.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPattern){
        
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        if(pos1val != "" && pos2val != "" && pos3val!= ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame );
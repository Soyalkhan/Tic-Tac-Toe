let btn = document.querySelectorAll(".boxes");
let newgame = document.querySelector("#newgame");
let msg = document.querySelector("#msg");
let msg_container = document.querySelector(".msg_container");
let play_again = document.querySelector("#ply_again");
let stpesCount = 0;
let trun0 = true; // user X or O
let currVal;
let winninPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = () => {
    trun0 = true;
    enableBox();
    msg_container.classList.add("hide");
    btn.innerText = "";
    stpesCount = 0;
    console.log("game reset");
}


btn.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("X,O clicked");
        if (trun0) {
            box.innerText = "X";
            trun0 = false;
        } else {
            box.innerText = "O";
            trun0 = true;
        }
        box.disabled = "true";
        stpesCount++;
        console.log(stpesCount);
        let isWinnerTrue = checkWinner();
        if (stpesCount === 9 && !isWinnerTrue) {
            drawGame();
        }

    })
})
// show winner
const showWinner = (pos1Val) => {
    // red = pos1Val;
    msg_container.classList.remove("hide");
    msg.innerText = `Congrats winner is ${pos1Val} wanna play another ?`;
    msg.style.color = "red";
    stpesCount = 0;

}

//diable box
const disableBox = () => {
    for (box of btn) {
        box.disabled = true;
    }
};
//enable box
const enableBox = () => {
    for (box of btn) {
        box.disabled = false;
        box.innerText = "";
    }
};

//draw game 
const drawGame = () => {
    msg.innerText = `Game is draw try again`;
    msg_container.classList.remove("hide");
    newgame.innerHTML = "Try Again ?"
    disableBox();
}
// const playAgain = () =>{
//     msg.innerText = `Game is draw try again`;
//     msg_container.classList.remove("hide");
// }

// check winner
const checkWinner = () => {
    for (let pattern of winninPattern) {
        let pos1Val = btn[pattern[0]].innerText;
        let pos2Val = btn[pattern[1]].innerText;
        let pos3Val = btn[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                disableBox();
                console.log("winner is : ", pos1Val);
            }
        }

    }
}

newgame.addEventListener("click", resetGame);
// play_again.addEventListener("click",playAgain)
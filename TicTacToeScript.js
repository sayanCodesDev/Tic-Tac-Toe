let btns = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new");

let turnO = true; //turnX & turnO

let winArr = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];

let playerName1 = prompt("Enter player name who will take O:");
console.log(`O is ${playerName1}`);

let playerName2 = prompt("Enter player name who will take X:");
console.log(`X is ${playerName2}`)

alert(`First chance is for O`)
const disableBoxes=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
    }
}
const showWinner=(winner)=>{
    if(winner==0){
        alert(`The winner is ${playerName1}`);
    }
    else{
        alert(`The winner is ${playerName2}`);
    }
}

const checkWinner = () => {
    for (let win of winArr) {
        let pos0 = btns[win[0]].innerText;
        let pos1 = btns[win[1]].innerText;
        let pos2 = btns[win[2]].innerText;

        if (pos0 != "" && pos1 != "" && pos2 != "") {
            if (pos1 === pos0 && pos2 === pos0) {
                console.log("winner");

                showWinner(pos1);
                disableBoxes();
            }
        }
    }
};

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("clicked!");

        if (turnO) {
            btn.innerText = "O";
            turnO = false;
            btn.disabled = true;
        }
        else {
            btn.innerText = "X";
            turnO = true;
            btn.disabled = true;
        }
        checkWinner();

    });
});

newBtn.addEventListener("click", enableBoxes)
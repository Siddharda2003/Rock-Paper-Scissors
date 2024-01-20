let start=document.querySelector(".start");
let play=document.querySelector(".play");
let body=document.querySelector("body");
let ps=document.querySelector(".ps");
let restart=document.querySelector(".restart");
let message=document.querySelector(".message");
let buttons=document.querySelectorAll(".btn");
let playersc=document.querySelector(".player-score");
let computersc=document.querySelector(".computer-score");
let player_score=0;
let computer_score=0;
let rps = ["Rock","Paper","Scissors"];
for(let btn of buttons){
    btn.disabled=true;
}
play.addEventListener("click",() =>{
    start.classList.add("hide");
    ps.classList.remove("hide");
    enablebuttons();
});
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let num=random();
        let com_pick=rps[num];
        let player_pick=btn.classList[1];
        if(com_pick===player_pick){
            message.innerText="Draw!"
        }else if((player_pick==="Rock" && com_pick==="Scissors") ||(player_pick==="Paper" && com_pick==="Rock") ||(player_pick==="Scissors" && com_pick==="Paper")){
            message.innerText=`Congratulations!, ${player_pick} beats ${com_pick} `;
            player_score++;
            playersc.innerText=player_score;
        }else{
            message.innerText=`Hard luck!, ${com_pick} beats ${player_pick} `;
            computer_score++;
            computersc.innerText=computer_score;
        }
        message.classList.remove("hide");
    })
});
restart.addEventListener("click",()=>{
    player_score=0;
    computer_score=0;
    start.classList.remove("hide");
    ps.classList.add("hide");
    computersc.innerText="0";
    playersc.innerText="0";
    disablebuttons();
    message.classList.add("hide");

});
const enablebuttons =  () =>{
    for(let btn of buttons){
        btn.disabled=false;
    }
};
const disablebuttons = () => {
    for(let btn of buttons){
        btn.disabled=true;
    }
};
const random = () =>{
    return Math.floor(Math.random()*3);
}
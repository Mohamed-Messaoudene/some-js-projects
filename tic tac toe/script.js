let boxes=document.querySelectorAll(".box");
let resut=document.querySelector(".footer");
let winner=document.getElementById("winner");
let replay=document.getElementById("replay");
let counter=0;
let Player_O=true;
let Player_X=false;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
                if(Player_O){
                    box.innerHTML="X";
                }else{
                    box.innerHTML="O";
                }
                counter++;
                if(counter==9){
                    winner.innerHTML="there isn't a winner !!!";
                    resut.style.cssText+="visibility: visible;top: 28%; left: 0%;transform:scale(1);";
                }
                Player_O=!Player_O;
                Player_X=!Player_X;
                box.style.pointerEvents = 'none'; // This disables pointer events on the element
                checkIfWin();
            })
            
        })
replay.addEventListener("click",()=>{
    resut.style.cssText +="visibility: hidden;top: -200px;left: 0%;transform: scale(1%);";
    relaodthegame();
})
function checkIfWin(){
    let patterns=[
        ["box1","box2","box3"],
        ["box4","box5","box6"],
        ["box7","box8","box9"],
        ["box1","box4","box7"],
        ["box2","box5","box8"],
        ["box3","box6","box9"],
        ["box1","box5","box9"],
        ["box7","box5","box3"]
    ];
    patterns.forEach((pattern)=>{
        let [a,b,c]=pattern;
        const boxA=document.getElementById(a);
        const boxB=document.getElementById(b);
        const boxC=document.getElementById(c);
        if(boxA.innerHTML!="" && boxA.innerHTML==boxB.innerHTML && boxB.innerHTML==boxC.innerHTML){
            boxA.classList.add("winStyle");
            boxB.classList.add("winStyle");
            boxC.classList.add("winStyle");
            boxA.parentElement.style.pointerEvents = 'none'; // This disables pointer events on the element
            // resut.style.cssText+="visibility: visible;top: 28%; left: 0%;transform:scale(1);";
            setTimeout(function(){
                resut.style.cssText+="visibility: visible;top: 36%; left: 0%;transform:scale(1);"
             }
            ,700);
            if(boxA.innerHTML=="X"){
               winner.innerHTML="player X is the winner";
            }else{
                winner.innerHTML="player O is the winner";
            }
        }
    })
}
function relaodthegame(){
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.classList.remove("winStyle");
        box.style.pointerEvents = 'all';
        box.parentElement.style.pointerEvents = 'all';   
        counter=0; 
    })
}
const buttons=document.querySelectorAll("header ul li button");
const color = document.querySelector(".color");
const change_color = document.querySelector("#change");
change_color.addEventListener("click",colorByName);
document.getElementById("simple").addEventListener("click", colorByName);
document.getElementById("rgb").addEventListener("click", colorRGB);
document.getElementById("hex").addEventListener("click", colorHEX);

function switch_case(type){
    change_color.removeEventListener("click",colorByName);
    change_color.removeEventListener("click",colorHEX);
    change_color.removeEventListener("click",colorRGB);
     if(type=="simple"){
        change_color.addEventListener("click",colorByName);
    } else if (type=="rgb"){
        change_color.addEventListener("click",colorRGB);
    } else if(type=="hex"){
        change_color.addEventListener("click",colorHEX);
    } 
    refrechButtons();
    document.getElementById(type).classList.add("active");
}
function colorByName (){
    let colors = ["black","blue","red","green","yellow","brown","skyblue","white","sliver","gray","purple","lime","olive","navy","teal","aqua"];
    let c=getRandomNumber(colors.length);
    document.body.style.backgroundColor =colors[c];
    color.textContent=colors[c];
}
function colorRGB(){
    let rgbcolor="rgb(";
    for(let i=0;i<3;i++ ) {
        rgbcolor+=getRandomNumber(255);
        if(i<2){ 
            rgbcolor+=",";
        } 
    }
    rgbcolor+=")";
    document.body.style.backgroundColor =rgbcolor;
    color.textContent=rgbcolor;
}
function colorHEX(){
    let colors = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexcolor="#";
    for(let i=0;i<6;i++ ) {
        hexcolor+=colors[getRandomNumber(colors.length)];
    }
    document.body.style.backgroundColor =hexcolor;
    color.textContent=hexcolor;
}
function getRandomNumber(length){
    return (Math.floor(Math.random() * length));
}
function refrechButtons(){
    buttons.forEach((btn)=>{
        btn.classList.remove("active");
    })
}

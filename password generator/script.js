let generate=document.getElementById("generate");
let affichage=document.querySelector("p");
let pass_length=document.getElementById("len");
let upper=document.getElementById("up");
let lower=document.getElementById("low");
let number=document.getElementById("nbr");
let symbol=document.getElementById("symb");
let copy=document.querySelector("#copy button");
let uppercaseLetters=[];
let lowercaseLetters=[];
let numbers=[];
let symbols=[];
for (var i = 32; i < 127; i++) {
    if (i >= 65 && i <= 90) {
        uppercaseLetters.push(String.fromCharCode(i));
    } else if (i >= 97 && i <= 122) {
        lowercaseLetters.push(String.fromCharCode(i));
    } else if (i >= 48 && i <= 57) {
        numbers.push(String.fromCharCode(i));
    } else {
        symbols.push(String.fromCharCode(i));
    }
}

generate.addEventListener("click",function(){
    let l=pass_length.value
    if(l<21 && l>=4){
        pass_length.classList.remove("error");
        let t=[];
        let password="";
        if(upper.checked){
           t=t.concat(uppercaseLetters);
        }
        if(lower.checked){
            t=t.concat(lowercaseLetters);
        }
        if(number.checked){
            t=t.concat(numbers);
        }
        if(symbol.checked){
            t=t.concat(symbols);
        }
        if(t!=0){
            for(let i=0;i<l;i++){
                password+=t[Math.floor(Math.random() * t.length)];
            }
            affichage.innerHTML=password;
        }
        else{
            // alert("wiwiwiwiwiwiww");
        }
        copy.innerHTML='<i class="fa-regular fa-clone"></i>';
    }else{
        pass_length.classList.add("error");
    }
    
   
})
copy.addEventListener("click",function(){
    let textToCopy=affichage.innerHTML;
    copyTextToClipboard(textToCopy);
    copy.innerHTML='<i class="fa-solid fa-check"></i>';

})

function copyTextToClipboard(text) {
    // Create a temporary textarea element
    var textarea = document.createElement("textarea");

    // Set the value of the textarea to the text to be copied
    textarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textarea);
}

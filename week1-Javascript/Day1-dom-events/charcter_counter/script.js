let text = document.querySelector("#text");
let counter = document.querySelector("#counter");
let clear = document.querySelector("#clear");
let LIMIT=150;

text.addEventListener("input" , function(){
    if(text.value.length>150){
        text.value=text.value.slice(0,150)
    }
    let remain = LIMIT - text.value.length;
    counter.textContent = remain;
    if(remain<=0){
        counter.style.color = "red";
    }
    else if(remain<=30){
        counter.style.color = "orange";
    }
    else{
        counter.style.color = "black";
    }
});
clear.addEventListener("click" , function(){
    text.value = "";
    counter.style.color = "";
    counter.textContent=LIMIT;
})
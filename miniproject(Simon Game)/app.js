let gameseq=[];
let userseq=[];
 
let btns = ["yellow","red","purple","green"];

let started = false;
let level =0;
let h2 = document.querySelector("h2");

//first step
document.addEventListener("keypress",function(){
    if(started==false){
     console.log("game is started");
     started = true;
     levelup();
    }
});
// second step

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },550);
};

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
};

function levelup(){
    userseq =[];
 level++;
 h2.innerText = `Level ${level}`;
 //randoom button flash
 let randomindex = Math.floor(Math.random() * 3);
 let randomcolor = btns[randomindex];
 let randombtn = document.querySelector(`.${randomcolor}`);
//  console.log(randomindex);
//  console.log(randomcolor);
//  console.log(randombtn);
gameseq.push(randomcolor);
console.log(gameseq);
 gameflash(randombtn);
};
function checkans(idx){
    // console.log("current level:",level)
    // let idx = level-1;
    if(userseq[idx]=== gameseq[idx]){
        // console.log("same value");
        if(userseq.length==gameseq.length){
           setTimeout(levelup(),1000);
        }
    }
    else{
        h2.innerHTML = `game over!  your score was <b>${level}</b><br>press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}
 //third step
function btnpress(){
    let btn = this;
    // console.log(this);
     userflash(btn);
     let usercolor = btn.getAttribute("id");
     userseq.push(usercolor);
     console.log(usercolor)
     checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
     btn.addEventListener("click", btnpress);
}
function reset(){
    started = false;
    gameseq =[];
    userseq =[];
    level=0;
}

var timer=60;
var score=0;
var n=0;
function makeBubble(){var clutter="";
for(var i=0;i<168;i++){
 let a=   Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${a}</div>`;
}
document.querySelector("#pbtm").innerHTML= clutter;
}

function setTimer(){
    var settm=setInterval(function(){
        if (timer>=0){
            document.querySelector("#timer").textContent=timer
            timer--;
        }     
        else{
            document.querySelector("#pbtm").innerHTML=`<div id="block"><h1>Game Over</h1><div id="scoreblock">Your score is ${score}</div><button id="playagain">Play Again</button></div>`;
          clearInterval(settm);

        } 
      }, 1000);
}

function setHit(){
     n=Math.floor(Math.random()*10)
    document.querySelector("#setHit").textContent=n
}

function scoreval(){
score += 10;
document.querySelector("#score").textContent=score
}

    document.querySelector("#pbtm").addEventListener("click",function(del){
    var num=Number(del.target.textContent);
     if ( num===n){
scoreval()
setHit()
makeBubble()
     }
     
   }
   )
   document.querySelector("#pbtm").addEventListener("click",function(del){
    var num=del.target.textContent;
     if ( num==="Play Again"){
        timer=60
        score=0
        document.querySelector("#timer").textContent=timer
        document.querySelector("#score").textContent=score
setHit()
makeBubble()
setTimer()
     }
     
   }
   )

makeBubble();
setTimer();
setHit();

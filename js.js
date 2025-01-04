'use strict';
document.querySelector(".score").textContent
document.querySelector(".high-score").textContent

document.querySelector(".massage").textContent
document.querySelector(".list").value
document.querySelector(".again").addEventListener('click',function () {
  secretNumber=Math.trunc(Math.random()*20)+1
  document.querySelector(".massage").textContent="🔥 start questioning"
  document.querySelector(".score").textContent=20
document.querySelector(".list").value=""
  document.querySelector("body").style.backgroundColor="#222";
  document.querySelector(".list").style.backgroundColor="#222";
  document.querySelector(".ask").style.width="250px"
  document.querySelector(".ask").textContent="?"
  
})

let highScore=0
let score=20
let secretNumber=Math.trunc(Math.random()*20)+1




document.querySelector(".check").addEventListener('click',function () {
    const interr=document.querySelector(".list").value
    
    if(interr==="") {
        document.querySelector(".massage").textContent="no number"
    }else if(interr == secretNumber){
        document.querySelector(".massage").textContent="🔥 correct number"
        document.querySelector(".ask").textContent=secretNumber
document.querySelector("body").style.backgroundColor="#60b347";
document.querySelector(".list").style.backgroundColor="#60b347";
document.querySelector(".ask").style.width="20rem"
        highScore++;  document.querySelector(".high-score").textContent=highScore;
        
    }else if(interr > secretNumber){
       if(score>1) {
           document.querySelector(".massage").textContent="🤦 to high";
        score--;
        document.querySelector(".score").textContent=score
       } else{
           document.querySelector(".massage").textContent="🤧 you lose";
           document.querySelector(".score").textContent=0
       }
    }else if(interr < secretNumber){
       if(score>1) {
           document.querySelector(".massage").textContent="🙆 to low";
         score--;
        document.querySelector(".score").textContent=score;
       }else {
           document.querySelector(".massage").textContent="🤧 you lose";
           document.querySelector(".score").textContent=0 
       } 
    }
    
})


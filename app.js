var input=document.getElementById("guess")
var output=document.getElementById("res")
var btn=document.getElementById("submit")

// random number generation
var randomnum=Math.floor(Math.random()*100)+1;
console.log(randomnum)
var guess=0;
var num=2;
btn.addEventListener("click",numbcheck);
function numbcheck(){
    guess=parseInt(input.value); 
    
    if(input.value==""){
        alert("error")
    }
    else if(guess!=randomnum)
    {
        if(num>0){
            btn.textContent="Submit"
            output.textContent=  `Wrong answer, you have ${num} tries left`
            num-=1;
            output.style.color="black"
            input.style.border="red solid"
            
        }
        else{
           input.style.border="red"
            input.disabled=true;
            output.textContent= `oh!!!sorry you lose the game, Better luck  for next time`
            btn.textContent="Play Again"
            output.style.color="red"
            btn.addEventListener("click",again)
            function again(){
                location.reload();
            }
        }
    }
    else{
       input.style.border="green solid"
        input.disabled=true;
        btn.textContent="Restart"
        output.textContent=  `Congratulation.....you won, answer is ${randomnum}`
        output.style.color="green"
        btn.addEventListener("click",restart)
        function restart(){
            location.reload();
        }
    }
}
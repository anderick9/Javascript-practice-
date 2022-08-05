var x = (Math.floor(Math.random()*3))

const getComputerChoice=()=>{
if (x===0)
return "paper"
else if (x===1)
return "rock"
else 
return "scissors";}


console.log(x)
console.log(getComputerChoice())

/*rock=1 paper=0 scissors=2*/
function press(Number) {
    const z=Number;
    console.log(z);
{if (x==0 && z==2)
alert ("Pc chose paper! So you win what a legend, refresh to play again");
else if (x==1 && z==0)
alert ("Pc chose rock! So you win what a legend, refresh to play again");
else if (x==2 && z==1)
alert ("Pc chose scissors! So you win what a legend, refresh to play again");
else if(z==2 && x==1 )
alert ("Pc chose rock! So you lose, refresh to try again");
else if(z==0 && x==2)
alert ("Pc chose scissors! So you lose, refresh to try again");
else if (z==1 && x==0)
alert ("Pc chose paper! So you lose, refresh to try again");
else if (x==z)
alert ("Draw, refresh to try again ");}


};








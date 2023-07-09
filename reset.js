function reset()
{
    zyciaa=3;
    updatep();
    drawharry();
    punktyy=0;
    runda=0;
    block=0;
   currentSong = null;
   answerTimeout = null;
   answerTimeout1 = null;
   answerTimeout2 = null;

   document.getElementById("result").innerHTML='';
   document.getElementById("cc").innerHTML='<p id="runda">'+"Round: 0" +'</p>';
  

    resetbtt = document.getElementById("btt");
    resetbtt.innerHTML='<button id="check" style="display: none;" onclick="checkAnswer()">'+"Check"+'</button>'+'<button id="playb" onclick="startGame()">'+"Start Game"+'</button>';

    clearTimeout(answerTimeout);
    clearTimeout(answerTimeout1);
    clearTimeout(answerTimeout2);

    availableSongs = [...songs]; 
    document.getElementById("punkty").innerHTML="Points: 0";
  
    rund = document.getElementById("runda");
    rund.innerHTML= 'Round: 0';

    //document.getElementById("check").style.display="inline-block";
   

    wk = document.getElementById("wk");
    wk.innerHTML= '';

    document.getElementById("pp").style.backgroundColor = "yellow";
    wk = document.getElementById("cc");
    wk.style.backgroundColor = "rgb(253, 207, 226)";

  

}

function showlvl()
{
    document.getElementById("difficulty").style.visibility = "visible";
}

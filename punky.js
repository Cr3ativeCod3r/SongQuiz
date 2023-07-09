

function updatep()
{
    zycia = document.getElementById("zycia")
    zycia.innerHTML = "Lives: ";
}


function updatepk()
{
    if(lvl==5000)grab=info(100);
    if(lvl==12000)grab=info(80);
    if(lvl==3000)grab=info(150);
    if(lvl==1000)grab=info(200);
   
    punktyy=punktyy+grab;
    punkty = document.getElementById("punkty")
    punkty.innerHTML = "Points: "+ punktyy.toFixed(0);
}


function changeLevel() 
{
    var selectElement = document.getElementById("difficulty");
    var selectedOption = selectElement.value;
    

    if (selectedOption === "easy") {
      lvl = 5000;
    } else if (selectedOption === "medium") {
      lvl = 3000;
    } else if (selectedOption === "hard") {
      lvl = 1000;
    } else if (selectedOption === "impo") {
        lvl = 500;
    }else if (selectedOption === "beg") {
      lvl = 12000;
  }
  }

  window.onload = drawharry;

  function drawharry()
  {
    document.getElementById("hf").innerHTML='';
    for(i=0;i<zyciaa;i++)
    {
        document.getElementById("hf").innerHTML+='<img src="lives.png">';
        
    }
    console.log("%cCOPYRIGHT KAMIL BANASZEK IG: _GAMBLING_MAN_", "font-size: 75px;");

  }
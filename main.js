let zyciaa=3;
let punktyy=0;
let block=0;
let blocks=0;
let runda=0;
var lvl=0;
let rekord=0;
let temp=0;
var real=0;
var no=new Audio('songs/nope.ogg');
var yes=new Audio('songs/ok.ogg');
var win=new Audio('songs/win.mp3');
var lose=new Audio('songs/lose.wav');
const songs = [
  'example1.mp3',
  'example2.mp3',
  'example3.mp3',
 
    //SONGS FROM FILE
    ];
    
    const songTitles = [
      'EXAMPLE1',//1
      'EXAMPLE2',//2
      'EXAMPLE3',//3
      //GIVER YOUR SONG TITLES
     
    ];




let availableSongs = [...songs]; 
let currentSong = null;
let answerTimeout = null;
let answerTimeout1 = null;
let answerTimeout2 = null;


function startGame() 
{
  
  document.getElementById("playb").style.display="none";
  document.getElementById("check").style.display="inline-block";
  document.getElementById("difficulty").style.visibility = "hidden";
  changeLevel();
  
  
 
  blocks=1;

  if(block==0)
  {
   
   runda=runda+1;
   showrund=document.getElementById("runda");
   showrund.innerHTML="Round: "+runda;
 
   if (runda >10  || zyciaa==0) 
    {
      if(zyciaa==0)
      {
        lose.play();
      }
    
      block=0;
      blocks=0;
      resetbtt = document.getElementById("btt");
      resetbtt.innerHTML= '<button onclick="reset()" >'+"reply"+'</button>'+'<button onclick="showlvl()" >'+"lvl change"+'</button>';
      document.getElementById("pp").style.backgroundColor = "rgb(253, 207, 226)";
      wk = document.getElementById("cc")
      wk.style.backgroundColor = "yellow";
      document.getElementById("result").innerHTML='';
      document.getElementById("cc").innerHTML='<p id="runda">'+"GAME OVER!" +'</p>';
      if(zyciaa>0)
      {
        win.play();
      temp=punktyy+(zyciaa*200);
      wk.innerHTML= 'Result: '+temp.toFixed(0);
   
      if(temp>rekord)
      {
        document.getElementById("result").innerHTML='<p style="font-size:50px;">'+"NEW RECORD! : "+temp.toFixed(0)+'</p>';
        real=temp;
      }
      document.getElementById("result").innerHTML = '<p class="maxt">' + "END OF GAME-" + '</p>' + '<br>' + '<p class="max">' + "YOUR MAX: " + real.toFixed(0) + '</p>';



    }
      

    }else
    {

   
  
  updatep();

  clearInterval(timerInterval);
  const currentSongIndex = Math.floor(Math.random() * availableSongs.length);
  const currentSongFile = availableSongs[currentSongIndex];

  
  stopSong();


  currentSong = new Audio('songs/' + currentSongFile);

  currentSong.addEventListener('loadedmetadata', function() 
  {
    const songDuration = currentSong.duration;
    const startTime = Math.random() * (songDuration - (lvl/1000)); 
    currentSong.currentTime = startTime;
    currentSong.play();

    
    answerTimeout = setTimeout(stopme, lvl);
    
  });

  clearAnswer();
  clearResult();
  
}
}

}




function stopme()
{ 
  currentSong.pause(); 
  stopTimerBar();
  startTimerBar();
  answerTimeout1 = setTimeout(checkAnswer, 20000);
}
function stopSong() {
  if (currentSong) {
    currentSong.pause();
    currentSong.currentTime = 0;
    currentSong.removeEventListener('loadedmetadata', null);
    currentSong = null;
    timerBar.style.display = 'none';
    timeRemaining.textContent = '';
  }


  clearTimeout(answerTimeout);
  stopTimerBar();
}

function checkAnswer() 
{
 
  if(blocks==0)
  {
   
    document.getElementById("check").style.display="none";
  document.getElementById("playb").style.display="inline-block";
  document.getElementById("playb").innerHTML="Next Song"
  ans=document.getElementById("answerInput");
  ans.style.display="none";

  if (!currentSong) {
    return;
  }
  block=0;
  clearTimeout(answerTimeout);
  clearTimeout(answerTimeout1);
  clearTimeout(answerTimeout2);
  
  const answerInput = document.getElementById('answerInput');
  const answer = answerInput.value.toUpperCase().trim();

  if (answer === getSongTitle(currentSong.src)) 
  
  {
    yes.play();
    displayResult('Correct answer!');
    updatepk();
  } 
  
  else {
   
    zyciaa=zyciaa-1;
    updatep();
    const correctAnswer = getSongTitle(currentSong.src);
    displayResult(`Wrong! the correct answer is: ${correctAnswer}`);
    drawharry();
    no.play();

  }

  clearInterval(timerInterval);
  
  const currentSongIndex = availableSongs.findIndex(song => song === currentSong.src.split('/').pop());
  if (currentSongIndex !== -1) {
    availableSongs.splice(currentSongIndex, 1);
  }

  stopSong();
}
}














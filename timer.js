let timeLeft = 0;
let timerInterval = null; 

function startTimerBar() 
{
  blocks=0;
  ans=document.getElementById("answerInput");
  ans.style.display="inline-block";
  block=1;
  stopTimerBar(); 
  const timerBar = document.getElementById('timerBar');
  const timeRemaining = document.createElement('div');
  timeRemaining.setAttribute('id', 'timeRemaining');
  timerBar.innerHTML = '';
  timerBar.appendChild(timeRemaining);
  timerBar.style.display = 'inline-block';
  timerBar.style.width = '100%';
  timerBar.style.transition = 'width 0.01s linear';
  timeLeft = 20;
  timerInterval = setInterval(() => {
    const currentWidth = parseFloat(timerBar.style.width);
    const decreaseAmount = (0.05); 
    const newWidth = currentWidth - decreaseAmount;
    timerBar.style.width = newWidth + '%';

    timeLeft -= 0.01;
    timeRemaining.textContent = timeLeft.toFixed(2);

    if(timeLeft<10)
    {
      timerBar.style.backgroundColor = 'red';
    }
    if(timeLeft>10)
    {
      timerBar.style.backgroundColor = 'green';
    }
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeRemaining.textContent = '';
    }
    let leftme = timeLeft.toFixed(2);
  }, 10);
}

function stopTimerBar() 
{
  
  const timerBar = document.getElementById('timerBar');
  timerBar.style.transition = 'none'; 
  timerBar.style.width = '100%';

  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null; 
  }
}

function info(x)
{
  return x*timeLeft.toFixed(2);
}
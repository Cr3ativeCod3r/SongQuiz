function getSongTitle(songFile) 
{
  const songIndex = songs.findIndex(song => song === songFile.split('/').pop());
  if (songIndex !== -1 && songIndex < songTitles.length) {
    return songTitles[songIndex];
  } else {
    return 'Nieznany tytuł';
  }
}

function displayResult(message) 
{
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = message;
}

function clearAnswer() {
  const answerInput = document.getElementById('answerInput');
  answerInput.value = '';
}

function clearResult() 
{
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';
}
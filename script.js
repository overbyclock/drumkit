window.addEventListener('keydown',function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);
  if(audio != null){
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
})
window.addEventListener('keyup',function(e){
  const key = document.querySelector(`.box[data-key="${e.keyCode}"]`);
  key.classList.remove('playing');
})
function sound(e){
  const audio = document.querySelector(`audio[data-key="${e}"]`);
  if(audio != null){
    audio.currentTime = 0;
    audio.play();
  }
}


  
const Pomodoro = document.getElementById('Tomato');
const MirtiloButton = document.getElementById('Mirtilo');
const PessegoButton = document.getElementById('Pêssego')
const BananaButton = document.getElementById('Banana')
const TomateButton = document.getElementById('Tomate')
const images = {
  blueberry: 'mirtilito.png',
  tomato: 'tomatito.png',
  peach: 'pesseguito.png',
  banana: 'bananita.png'
};

function removeThemeClasses() {
  document.body.classList.remove('blueberry-mode', 'peach-mode', 'banana-mode', 'tomato-mode');
}

MirtiloButton.addEventListener('click', function(){
  removeThemeClasses();
  document.body.classList.toggle('blueberry-mode');
  Pomodoro.src = images.blueberry;
});

PessegoButton.addEventListener('click', function(){
  removeThemeClasses();
  document.body.classList.toggle('peach-mode');
  Pomodoro.src = images.peach;
});

BananaButton.addEventListener('click', function(){
  removeThemeClasses();
  document.body.classList.toggle('banana-mode');
  Pomodoro.src = images.banana;
});

TomateButton.addEventListener('click', function(){
  removeThemeClasses();
  document.body.classList.toggle('tomato-mode');
  Pomodoro.src = images.tomato;
});

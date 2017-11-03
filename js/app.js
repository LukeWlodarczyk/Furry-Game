import Game from './game.js';

document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("keydown", event => game.turnFurry(event));

  const game = new Game();
  game.startGame();

  const btnRestart = document.querySelector('#restart');
  btnRestart.addEventListener('click', () => {
    document.querySelector('.result').style.display = 'none';
    document.addEventListener("keydown", event => game2.turnFurry(event));
    const game2 = new Game();
    game2.startGame();
  });



});

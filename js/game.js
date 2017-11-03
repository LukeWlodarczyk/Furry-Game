import Furry from './furry.js';
import Coin from './coin.js';

export default class Game {
  constructor() {
    this.board = document.querySelectorAll("#board > div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.speed = 250;
    this.index = (x, y) => (x + (y * 10));
  };

  showFurry(){
    this.hideFurry();
    this.board[this.index(this.furry.x,this.furry.y)].classList.add('furry');
  }

  showCoin(){
    this.board[this.index(this.coin.x,this.coin.y)].classList.add('coin');
  }

  startGame(){
    this.showFurry();
    this.showCoin();
    this.intervalId = setInterval(() => {
        this.moveFurry();
    }, this.speed);
  }

  turnFurry(event) {
    switch (event.which) {
      case 37:
        this.furry.direction = "left";
        break;
      case 38:
        this.furry.direction = "down";
        break;
      case 39:
        this.furry.direction = "right";
        break;
      case 40:
        this.furry.direction = "up";
        break;
    };
  };

  moveFurry() {
    switch (this.furry.direction) {
      case "left":
        this.furry.x--;
        break;
      case "down":
        this.furry.y--;
        break;
      case "right":
        this.furry.x++;
        break;
      case "up":
        this.furry.y++;
        break;
    };
    if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
      this.gameOver();
    } else {
      this.checkCoinCollision();
      this.showFurry();
    }
  };

  hideFurry() {
    const furry = document.querySelector(".furry");
    if (furry != null) {
      furry.classList.remove("furry");
    };
  };

  checkCoinCollision() {
    if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
      document.querySelector(".coin").classList.remove("coin");
      this.score++;
      document.querySelector("#score").innerText = this.score;
      this.coin = new Coin();
      this.showCoin();
    };
  };

  gameOver() {
    clearInterval(this.intervalId);
    this.hideFurry();
    document.querySelector(".coin").classList.remove("coin");
    document.querySelector('#result').style.display = 'block';
    document.querySelector('#finalScore').innerText = `Final score: ${this.score}`
  }

};

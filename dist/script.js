/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(11);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {

  document.addEventListener("keydown", function (event) {
    return game.turnFurry(event);
  });

  var game = new _game2.default();
  game.startGame();

  var btnRestart = document.querySelector('#restart');
  btnRestart.addEventListener('click', function () {
    document.querySelector('.result').style.display = 'none';
    document.addEventListener("keydown", function (event) {
      return game2.turnFurry(event);
    });
    var game2 = new _game2.default();
    game2.startGame();
  });
});

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _furry = __webpack_require__(12);

var _furry2 = _interopRequireDefault(_furry);

var _coin = __webpack_require__(13);

var _coin2 = _interopRequireDefault(_coin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.board = document.querySelectorAll("#board > div");
    this.furry = new _furry2.default();
    this.coin = new _coin2.default();
    this.score = 0;
    this.speed = 250;
    this.index = function (x, y) {
      return x + y * 10;
    };
  }

  _createClass(Game, [{
    key: 'showFurry',
    value: function showFurry() {
      this.hideFurry();
      this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    }
  }, {
    key: 'showCoin',
    value: function showCoin() {
      this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    }
  }, {
    key: 'startGame',
    value: function startGame() {
      var _this = this;

      this.showFurry();
      this.showCoin();
      this.intervalId = setInterval(function () {
        _this.moveFurry();
      }, this.speed);
    }
  }, {
    key: 'turnFurry',
    value: function turnFurry(event) {
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
    }
  }, {
    key: 'moveFurry',
    value: function moveFurry() {
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
    }
  }, {
    key: 'hideFurry',
    value: function hideFurry() {
      var furry = document.querySelector(".furry");
      if (furry != null) {
        furry.classList.remove("furry");
      };
    }
  }, {
    key: 'checkCoinCollision',
    value: function checkCoinCollision() {
      if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
        document.querySelector(".coin").classList.remove("coin");
        this.score++;
        document.querySelector("#score").innerText = this.score;
        this.coin = new _coin2.default();
        this.showCoin();
      };
    }
  }, {
    key: 'gameOver',
    value: function gameOver() {
      clearInterval(this.intervalId);
      this.hideFurry();
      document.querySelector(".coin").classList.remove("coin");
      document.querySelector('#result').style.display = 'block';
      document.querySelector('#finalScore').innerText = 'Final score: ' + this.score;
    }
  }]);

  return Game;
}();

exports.default = Game;
;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Furry = function Furry(x, y, direction) {
    _classCallCheck(this, Furry);

    this.x = 0;
    this.y = 0;
    this.direction = "right";
};

exports.default = Furry;
;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coin = function Coin() {
    _classCallCheck(this, Coin);

    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
};

exports.default = Coin;
;

/***/ })
/******/ ]);
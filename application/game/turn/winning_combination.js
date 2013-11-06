Application.Game.Turn.WinningCombination = (function(){
/**
 * Поиск победной комбинации
 * @constructor
 */
function WinningCombination(chip, board, number) {
  this.chip = chip;
  this.board = board;
  this.number = number;
};


/**
 * @privat
 */
WinningCombination.prototype.gorisontal = function() {
  var win = true;

  for (var i = 0; i < this.board.size_board; i++) {
    if (this.board.get_chip(this.number, i) != this.chip) {
      win = false;
      break;
    }
  }

  return win;
};

/**
 * @privat
 */
WinningCombination.prototype.vertical = function() {
  var win = true;
  
  for (var i = 0; i < this.board.size_board; i++) {
    if (this.board.get_chip(i, this.number) != this.chip) {
      win = false;
      break;
    }
  }
 
  return win;
};

/**
 * @privat
 */
WinningCombination.prototype.diagonal_down = function() {
  var win = true;
  
  for (var i = 0; i < this.board.size_board; i++) {
    if (this.board.get_chip(i, i) != this.chip) {
      win = false;
      break;
    }
  }

  return win;
};

/**
 * @privat
 */
WinningCombination.prototype.diagonal_up = function() {
  var win = true;
  
  for (var i = 0; i < this.board.size_board; i++) {
    if (this.board.get_chip(i, (this.board.size_board - 1 - i)) != this.chip) {
      win = false;
    }
  }

  return win;
};

  return WinningCombination;
})();
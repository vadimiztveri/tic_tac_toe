/**
 * Поиск победной комбинации
 * @constructor
 */
function WinningCombination(chip, number, board) {
  this.chip = chip;
  this.number = number;
  this.board = board;
};

WinningCombination.prototype.gorisontal = function() {
  var win = true;

  for (var i = 0; i < this.board.length_board; i++) {
    if (this.board.get_chip(this.number, i) != this.chip) {
      win = false;
    }
  }

  return win;
};

WinningCombination.prototype.vertical = function() {
  var win = true;
  
  for (var i = 0; i < this.board.length_board; i++) {
    if (this.board.get_chip(i, this.number) != this.chip) {
      win = false;
    }
  }
 
  return win;
};

WinningCombination.prototype.diagonal = function() {
  var win = true;
  
  if (this.number === 0) {
    for (var i = 0; i < this.board.length_board; i++) {
      if (this.board.get_chip(i, i) != this.chip) {
        win = false;
      }
    }
  } else {
    for (var i = 0; i < this.board.length_board; i++) {
      if (this.board.get_chip(i, (this.board.length_board - 1 - i)) != this.chip) {
        win = false;
      }
    }
  }

  return win;
};
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

  for (var i = 0; i < this.board.number_cells_on_side; i++) {
    if (this.board.get_chip(this.number, i) != this.chip) {
      win = false;
    }
  }

  return win;
};

WinningCombination.prototype.vertical = function() {
  var win = true;
  
  for (var i = 0; i < this.board.number_cells_on_side; i++) {
    if (this.board.get_chip(i, this.number) != this.chip) {
      win = false;
    }
  }
 
  return win;
};

WinningCombination.prototype.diagonal = function() {
  var win = true;
  
  if (this.number === 0) {
    for (var i = 0; i < this.board.number_cells_on_side; i++) {
      if (this.board.get_chip(i, i) != this.chip) {
        win = false;
      }
    }
  } else {
    for (var i = 0; i < this.board.number_cells_on_side; i++) {
      if (this.board.get_chip(i, (this.board.number_cells_on_side - 1 - i)) != this.chip) {
        win = false;
      }
    }
  }

  return win;
};



/*
Turn.prototype.set_light_win_cells = function(direction, number) {

  if (direction === "gorisont") {
    for (var i = 0; i < this.board.number_cells_on_side; i++){
      this.board.rows[number][i].set_win();
    }
  }
  if (direction === "vertical") {
    for (var i = 0; i < this.board.number_cells_on_side; i++){
      this.board.rows[i][number].set_win();
    }
  }

  if (direction === "diagonal") {
    for (var i = 0; i < this.board.number_cells_on_side; i++){
      if (number === 0) {this.board.rows[i][i].set_win();}
      if (number === 1) {this.board.rows[2 - i][i].set_win();}
    }
  }
};
*/
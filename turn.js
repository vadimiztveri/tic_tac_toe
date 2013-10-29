/**
 * Один ход
 * @constructor
 */
function Turn(player, coordinates, board) {
  this.player = player;
  this.row = coordinates[0];
  this.cell = coordinates[1];
  this.board = board;

  this.set_chip();
};


Turn.prototype.set_chip = function () {
  this.board.rows[this.row][this.cell].set_chip(this.player.chip);
};

Turn.prototype.GORISONTAL = 1;
Turn.prototype.VERTICAL = 2;
Turn.prototype.DIAGONAL = 3;

/*
a = new Turn()
a.DIAGONAL // 1
a.set_chip()
if (x.type === a.DIAGONAL)
*/

/**
 * Првоеряет, есть ли на доске победная комбинация
 */
Turn.prototype.is_victory = function() {

  for (var i = 0; i < this.board.number_cells_on_side; i++) {
    if (this.board.contains_at(this.player.chip, i, "gorisont")) {
      this.set_light_win_cells("gorisont", i);
      return true;
    }
  }
  
  for (var i = 0; i < this.board.number_cells_on_side; i++) {
    if (this.board.contains_at(this.player.chip, i, "vertical")) {
      this.set_light_win_cells("vertical", i);
      return true;
    }
  }

  if (this.board.contains_at(this.player.chip, 0, "diagonal")) {
    this.set_light_win_cells("diagonal", 0); return true;
  }
  if (this.board.contains_at(this.player.chip, 1, "diagonal")) {
    this.set_light_win_cells("diagonal", 1);
    return true;
  }

  return false;
};

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

  this.board.redrow;
};
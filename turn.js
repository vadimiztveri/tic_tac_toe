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

/**
 * Проверяет, есть ли на доске победная комбинация
 */
Turn.prototype.is_victory = function() {
  
  for (var i = 0; i < this.board.length_board; i++) {
    var winning_combination = new WinningCombination(this.player.get_chip(), i, this.board);
    if (winning_combination.gorisontal()) {
      this.set_light_win_cells(this.GORISONTAL, i);
      return true;
    }
  }
  
  for (var i = 0; i < this.board.length_board; i++) {
    winning_combination = new WinningCombination(this.player.get_chip(), i, this.board);
    if (winning_combination.vertical()) {
      this.set_light_win_cells(this.VERTICAL, i);
      return true;
    }
  }

  winning_combination = new WinningCombination(this.player.get_chip(), 0, this.board);
  if (winning_combination.diagonal()) {
    this.set_light_win_cells(this.DIAGONAL, 0); return true;
  }
  winning_combination = new WinningCombination(this.player.get_chip(), 1, this.board);
  if (winning_combination.diagonal()) {
    this.set_light_win_cells(this.DIAGONAL, 1);
    return true;
  }

  return false;
};

Turn.prototype.set_light_win_cells = function(direction, number) {

  if (direction === 1) {
    for (var i = 0; i < this.board.length_board; i++){
      this.board.rows[number][i].set_win();
    }
  }
  if (direction === 2) {
    for (var i = 0; i < this.board.length_board; i++){
      this.board.rows[i][number].set_win();
    }
  }

  if (direction === 3) {
    for (var i = 0; i < this.board.length_board; i++){
      if (number === 0) {
        this.board.rows[i][i].set_win();
      }
      if (number === 1) {
        this.board.rows[this.board.length_board - 1 - i][i].set_win();
      }
    }
  }
};
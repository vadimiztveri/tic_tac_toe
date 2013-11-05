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

/**
 * Проверяет, есть ли на доске победная комбинация
 * @privat
 */
Turn.prototype.is_victory = function() {
  if (this.is_horizontal_win() || this.is_vertical_win() || this.is_diagonal_down_win() || this.is_diagonal_up_win()) {
    return true;
  }

  return false;
};

/**
 * @privat
 */
Turn.prototype.is_horizontal_win = function() {
  for (var i = 0; i < this.board.size_board; i++) {
    var winning_combination = new WinningCombination(this.player.get_chip(), this.board, i);
    if (winning_combination.gorisontal()) {
      this.set_win_cells_horizontal(i);
      return true;
    }
  }

  return false;
};

/**
 * @privat
 */
Turn.prototype.is_vertical_win = function() {
  for (var i = 0; i < this.board.size_board; i++) {
    winning_combination = new WinningCombination(this.player.get_chip(), this.board, i);
    if (winning_combination.vertical()) {
      this.set_win_cells_vertical(i);
      return true;
    }
  }

  return false;
};

/**
 * @privat
 */
Turn.prototype.is_diagonal_down_win = function() {
  winning_combination = new WinningCombination(this.player.get_chip(), this.board, 0);
  if (winning_combination.diagonal_down()) {
    this.set_win_cells_diagonal_down();
    return true;
  }

  return false;
};

/**
 * @privat
 */
Turn.prototype.is_diagonal_up_win = function() {
  winning_combination = new WinningCombination(this.player.get_chip(), this.board, 0);
  if (winning_combination.diagonal_up()) {
    this.set_win_cells_diagonal_up();
    return true;
  }

  return false;
};

/**
 * Присваивает ячейчам победной комбанации статус (cell.win === true).
 * @privat
 */
Turn.prototype.set_win_cells_horizontal = function(number) {
  for (var i = 0; i < this.board.size_board; i++){
    this.board.rows[number][i].set_win();
  }
};

/**
 * @privat
 */
Turn.prototype.set_win_cells_vertical = function(number) {
  for (var i = 0; i < this.board.size_board; i++){
    this.board.rows[i][number].set_win();
  }
};

/**
 * @privat
 */
Turn.prototype.set_win_cells_diagonal_down = function() {
  for (var i = 0; i < this.board.size_board; i++){
    this.board.rows[i][i].set_win();
  }
};

/**
 * @privat
 */
Turn.prototype.set_win_cells_diagonal_up = function() {
  for (var i = 0; i < this.board.size_board; i++){
    this.board.rows[i][this.board.size_board - 1 - i].set_win();
  }
};
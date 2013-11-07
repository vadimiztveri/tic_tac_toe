Application.Game.Turn = (function(){
/**
 * Один ход
 * @constructor
 */
function Turn(current_chip, coordinates, board, win_length) {
  this.current_chip = current_chip;
  this.row = Number(coordinates[0]);
  this.cell = Number(coordinates[1]);
  this.board = board;
  this.win_length = win_length;

  this.set_chip();
};

/**
 * @private
 */
Turn.prototype.set_chip = function () {
  this.board.rows[this.row][this.cell].set_chip(this.current_chip);
};

/**
 * Проверяет, есть ли на доске победная комбинация
 * @private
 */
Turn.prototype.is_victory = function() {
  return (
    this.is_horizontal_win() ||
    this.is_vertical_win() ||
    this.is_diagonal_down_win() ||
    this.is_diagonal_up_win()
  );
};

/**
 * @private
 */
Turn.prototype.is_horizontal_win = function() {
  var ahead_line = this.ahead(0, 1),
      back_line = this.back(0, 1),
      line = ahead_line + back_line[0];

  if (line >= this.win_length) {
    this.set_win_cells_horizontal(this.row, (this.cell - back_line[1]), line);
    return true;
  }
};

/**
 * @private
 */
Turn.prototype.is_vertical_win = function() {
  var ahead_line = this.ahead(1, 0),
      back_line = this.back(1, 0),
      line = ahead_line + back_line[0];

  if (line >= this.win_length) {
    this.set_win_cells_vertical((this.row - back_line[1]), this.cell, line);
    return true;
  }
};

/**
 * @private
 */
Turn.prototype.is_diagonal_down_win = function() {
  var back_line = this.back(1, 1),
      ahead_line = this.ahead(1, 1),
      line = ahead_line + back_line[0];

  if (line >= this.win_length) {
    this.set_win_cells_diagonal_down((this.row - back_line[1]), (this.cell - back_line[1]), line);
    return true;
  }
};

/**
 * @private
 */
Turn.prototype.is_diagonal_up_win = function() {
  var back_line = this.back(1, -1),
      ahead_line = this.ahead(1, -1),
      line = ahead_line + back_line[0];

  if (line >= this.win_length) {
    this.set_win_cells_diagonal_up((this.row - back_line[1]), (this.cell + back_line[1]), line);
    return true;
  }
};


/**
 * @private
 */
Turn.prototype.ahead = function(y_count, x_count) {
  var ahead_line = 0;
  
  for (var i = 1; i < this.win_length; i++) {
    var row = this.row + i*y_count,
        cell = this.cell + i*x_count;

    if (row < this.board.size_board &&
        this.board.rows[row][cell] &&
        this.board.rows[row][cell].chip === this.current_chip
    ){
      ahead_line++;
    } else {
      break;
    }
  }

  return ahead_line;
}

/**
 * @private
 */
Turn.prototype.back = function(y_count, x_count) {
  var back_line = 0,
      start_cell = 0;
  
  for (var i = 0; i < this.win_length; i++) {
    var row = this.row - i*y_count,
        cell = this.cell - i*x_count;

    if (row > -1 &&
        this.board.rows[row][cell] &&
        this.board.rows[row][cell].chip === this.current_chip
    ){
      back_line++;
      start_cell = i;
    } else {
      break;
    }
  }

  return [back_line, start_cell];
}

/**
 * Присваивает ячейчам победной комбанации статус (cell.win === true).
 * @private
 */
Turn.prototype.set_win_cells_horizontal = function(row, cell, line) {
  for (var i = 0; i < line; i++){
    this.board.rows[row][(cell + i)].set_win();
  }
};

/**
 * @private
 */
Turn.prototype.set_win_cells_vertical = function(row, cell, line) {
  for (var i = 0; i < line; i++){
    this.board.rows[(row + i)][cell].set_win();
  }
};

/**
 * @private
 */
Turn.prototype.set_win_cells_diagonal_down = function(row, cell, line) {
  for (var i = 0; i < line; i++){
    this.board.rows[(row + i)][(cell + i)].set_win();
  }
};

/**
 * @private
 */
Turn.prototype.set_win_cells_diagonal_up = function(row, cell, line) {
  for (var i = 0; i < line; i++){
    this.board.rows[(row + i)][(cell - i)].set_win();
  }
};

  return Turn;
})();
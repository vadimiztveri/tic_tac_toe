/**
 * Доска для игры
 * @constructor
 */
function Board(size_board) {
  this.size_board = size_board;
  this.rows = this.create_rows();
};

/**
 * Создает массивы ячеек. Массивров по числу this.size_board, в каждом массиве ячеек по числу this.size_board
 */
Board.prototype.create_rows = function() {
  var rows = [];

  for (var i = 0; i < this.size_board; i++) {
    var new_row = [];    
    for (var j = 0; j < this.size_board; j++) {
      new_row.push(new Cell());
    }
    rows.push(new_row);
  }

  return rows;
};

/**
 * @privat
 */
Board.prototype.get_chip = function(row, cell) {
  if (this.rows[row][cell].chip) {
    return this.rows[row][cell].chip.name;
  }
};

/**
 * @privat
 */
Board.prototype.get_win = function(row, cell) {
  if (this.rows[row][cell].win) {
    return true;
  }
};
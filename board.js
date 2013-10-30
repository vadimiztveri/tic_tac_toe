/**
 * Доска для игры
 * @constructor
 */
function Board(length_board) {
  this.length_board = length_board;
  this.rows = this.create_rows();
};

/**
 * Создает массивы ячеек. Массивров по числу this.length_board, в каждом массиве ячеек по числу this.length_board
 */
Board.prototype.create_rows = function() {
  var rows = [];

  for (var i = 0; i < this.length_board; i++) {
    var new_row = [];    
    for (var j = 0; j < this.length_board; j++) {
      new_row.push(new Cell());
    }
    rows.push(new_row);
  }

  return rows;
};

Board.prototype.redraw = function() {
  var table_text = "";
  for (var i = 0; i < this.length_board; i++) {
    table_text += "<tr>";
    for (var j = 0; j <this.length_board; j++) {
      table_text += this.rows[i][j].redraw(i, j);
    }
    table_text += "</tr>";
  }
  this.display(table_text);
};

/**
 * Вставляет игровую доску в HTML
 */
Board.prototype.display = function(table_text) {
  document.getElementById("board").innerHTML = table_text;
};

Board.prototype.get_chip = function(row, cell) {
  if (this.rows[row][cell].chip === undefined) {
    return false;
  } else {
    return this.rows[row][cell].chip.name;
  }
}
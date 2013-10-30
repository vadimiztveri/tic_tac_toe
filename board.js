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

Board.prototype.redraw = function() {
  var table_text = "";
  for (var i = 0; i < this.size_board; i++) {
    table_text += "<tr>";
    for (var j = 0; j <this.size_board; j++) {
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
  if (this.rows[row][cell].chip) {
    return this.rows[row][cell].chip.name;
  } else {
    return false;
  }
}

Board.prototype.get_win = function(row, cell) {
  if (this.rows[row][cell].win) {
    return true;
  } else {
    return false;
  }
}